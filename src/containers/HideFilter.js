import {HideFilter} from '../components/HideFilter';
import {connect} from 'react-redux';
import {hideCountersLessThan} from '../actions/hideFilter';

let mapStateToProps = (state) => {
    return {
        number: state.hideFilter
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeHideNumber: (number) => {dispatch(hideCountersLessThan(number))}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HideFilter)