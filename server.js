import express from 'express';
import path from 'path';
import fs from 'fs';
import serialize from 'serialize-javascript';
import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './space-x-client/src/App';

const app = express();
const PORT = process.env.PORT || 3000;

const handleRender = (req, res) => {

    const { launch_year, launch_success, land_success } = req.query;
    const year = launch_year ? `&launch_year=${launch_year}` : "";
    const launch = launch_success ? `&launch_success=${launch_success}` : "";
    const land = land_success ? `&land_success=${land_success}` : "";
    const url = `https://api.spacexdata.com/v3/launches?limit=100${year}${launch}${land}`;
    axios.get(url)
        .then(response => {
            const data = response.data
            const initialData = {
                launches: data,
                year: launch_year || '',
                launch: launch_success || '',
                land: land_success || "",
                creatorDetails: {
                    name: 'Himanshu Sajwan',
                }
            }
            // const rootReducer = combineReducers({
            //     launchData: function(state = {}, action) {
            //         switch (action.type) {
            //           default:
            //             return state;
            //         }
            //       },
            // });
            // const initialState = {launchData: initialData.launches};
            // const store = createStore(rootReducer, initialState);

            const html = ReactDOMServer.renderToString(
                // <Provider store={store}>
                    <StaticRouter location={req.url}>
                            <App initialData={initialData} />
                    </StaticRouter>
                // </Provider>
            )

            // Read index.html file
            fs.readFile(`${__dirname}/space-x-client/build/index.html`, 'utf8', (err, markup) => {
                if(err) throw err;

                // Inserts the rendered React HTML into our main div
                const data = markup.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div><script>window.__INITIAL_STATE__= ${serialize(initialData)}</script>`)
                res.send(data);
            });
        });
};

// Serve built files with static files middleware
app.use('/static', express.static(path.join(__dirname, 'space-x-client/build/static')));

// Serves request using renderServerDOM function
app.get('/', handleRender);
app.get('/filter', handleRender);

// In case if path is not found
app.get('*', (req, res)=> {
    res.status(404).sendFile(`${__dirname}/not-found.html`);
});

// Starting Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
