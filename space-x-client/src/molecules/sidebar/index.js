import React, { Component } from 'react';
import './sidebar.scss';
import Card from '../../atoms/card';
import Button from '../../atoms/button';
import { LAUNCH_YEAR, TOGGLE_BUTTONS_LAUNCH, TOGGLE_BUTTONS_LAND } from '../../utils/common/js/constants';
const blockName = 'sidebar';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            yearFilter: LAUNCH_YEAR,
            launchFilter: TOGGLE_BUTTONS_LAUNCH,
            landFilter: TOGGLE_BUTTONS_LAND,
        });
    }

    render() {
        const {filterData, year, launch, land, resetFilter} = this.props;
        return (
            <aside className={blockName}>
                <Card customClass={`${blockName}__filters-container-card`}>
                    <div className={`${blockName}__head`}>
                        <span className={`${blockName}__filters-container-title`}>Filters</span>
                        <Button onButtonClick={resetFilter} customClass={`${blockName}__clear-filter`} content={{value: 'Reset'}}/>
                    </div>
                    <div className={`${blockName}__filters`}>
                        <div className={`${blockName}__filters-title`}>Launch Year</div>
                        <div className={`${blockName}__filters-container`}>
                            {this.state && this.state.yearFilter.length && this.state.yearFilter.map(content => {
                                if(content.value === +year) content.selected = true;
                                else content.selected = false;
                                return <Button onButtonClick={filterData} key={content.id} content={content} filterName='year'/>
                            })}
                        </div>
                    </div>
                    <div className={`${blockName}__filters`}>
                        <div className={`${blockName}__filters-title`}>Successful Launch</div>
                        <div className={`${blockName}__filters-container`}>
                            {this.state && this.state.launchFilter.length && this.state.launchFilter.map(content => {
                                if(content.value === launch) content.selected = true;
                                else content.selected = false;
                                return <Button onButtonClick={filterData} key={content.id} content={content} filterName='launch'/>
                            })}
                        </div>
                    </div>
                    <div className={`${blockName}__filters`}>
                        <div className={`${blockName}__filters-title`}>Successful Landing</div>
                        <div className={`${blockName}__filters-container`}>
                            {this.state && this.state.landFilter.length && this.state.landFilter.map(content => {
                                if(content.value === land) content.selected = true;
                                else content.selected = false;
                                return <Button onButtonClick={filterData} key={content.id} content={content} filterName='land'/>
                            })}
                        </div>
                    </div>
                </Card>
            </aside>
        )
    }
}

export default Sidebar;