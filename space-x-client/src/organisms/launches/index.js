import React, {Component} from 'react';
// import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import './launches.scss';
import Sidebar from '../../molecules/sidebar'
import Container from '../../molecules/container';
// import { launchDataAction } from '../../actions/launch-data-action';

const blockName = 'launches';

class Launches extends Component {

  componentDidMount() {
      this.callAPI();
  }

  componentDidUpdate(prevProps, prevState) {
    const { year, launch, land } = prevProps;

    if (year !== this.props.year
      || launch !== this.props.launch
      || land !== this.props.land) {
        this.callAPI();
      }
    }

    callAPI() {
        const { year, launch, land } = this.props;;
        const yearFilter = year ? `&launch_year=${year}` : "";
        const launchFilter = launch ? `&launch_success=${launch}` : "";
        const landFilter = land ? `&land_success=${land}` : "";
        const url = `https://api.spacexdata.com/v3/launches?limit=100${yearFilter}${launchFilter}${landFilter}`;
        this.props.callAPI(url)
        // this.props.launchDataAction(url);
      }

      filterData(content, filterName) {
        this.props.setFilter(filterName, content.value, () => {
          const { year, launch, land } = this.props;
          const yearFilter = year ? `launch_year=${year}` : "";
          const launchFilter = launch ? `launch_success=${launch}` : "";
          const landFilter = land ? `land_success=${land}` : "";
          this.props.history.push(`filter?${yearFilter}${year && launch ? "&" : ""}${launchFilter}${(year || launch) && land ? "&" : ""}${landFilter}`);
        });
      }

      render() {
        const { launches } = this.props;
        return (
            <div className={blockName}>
                <header className={`${blockName}__title`}>SpaceX Launch Programs</header>
                <main className={`${blockName}__container`}>
                    <Sidebar
                      year={this.props.year}
                      launch={this.props.launch}
                      land={this.props.land}
                      filterData={this.filterData.bind(this)}
                      yearFilter={this.props.yearFilter}
                      landFilter={this.props.landFilter}
                      launchFilter={this.props.launchFilter}
                    />
                    <Container launches= {launches}/>
                </main>
                <footer className={`${blockName}__footer`}><b>Developed by: </b>{this.props && this.props.creatorDetails && this.props.creatorDetails.name}</footer>
            </div>
        )
      }
}


// const mapStateToProps = state => ({
//     launches: state.launchData
// });

// const mapDispatchToProps = dispatch => ({
//     launchDataAction: url => dispatch(launchDataAction(url))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Launches));

export default withRouter(Launches)