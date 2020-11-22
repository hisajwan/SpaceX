import React from 'react';
import Card from '../../atoms/card';
import './container.scss';

const blockName = 'container';
function Container({launches, land}) {
    return (
        <section className={blockName}>
            {launches && launches.length > 0 ? launches.map(launch => {
            const { launch_success,
                launch_year,
                mission_name,
                flight_number,
                mission_id,
                links: { mission_patch_small } } = launch;
                return (
                    <Card key={launch.flight_number} customClass= {`${blockName}__card`}>
                        <div className={`${blockName}__card-header`} aria-labelledby="card header">
                            <img className={`${blockName}__card-image`} aria-labelledby="mission image" src={mission_patch_small} alt={mission_name} />
                        </div>
                        <div className={`${blockName}__card-title`} aria-labelledby="Mission Title">
                            {mission_name} #{flight_number}
                        </div>
                        <div className={`${blockName}__card-body`} aria-labelledby="Mission Details" >
                            <div>Mission Ids: <ul>{mission_id && mission_id.length ? mission_id.map(mission => (<li key={mission} aria-labelledby={mission}>{mission}</li>)) : <li>NA</li>}</ul>   </div>
                            <div>Launch Year:<span aria-labelledby={`launch year ${launch_year}`}> {launch_year}</span></div>
                            <div>Successful Launch:<span aria-labelledby={`launch success ${launch_success !== null && launch_success.toString()}`}> {launch_success !== null && launch_success.toString()}</span></div>
                            <div>Successful Landing:<span aria-labelledby={`launch  success ${land && land.toString()}`}>{land && land.toString()}</span></div>
                        </div>
                    </Card>
                )
            }) : <h4> No data found</h4>}
        </section>
    )
}

export default Container;