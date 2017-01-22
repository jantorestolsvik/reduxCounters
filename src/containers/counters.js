import {connect} from 'react-redux'
import {Counters} from '../components/counters';
import {addCounter} from '../actions/counter';

let mapStateToProps = (state) => {
    return {
        counters: state
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCounter: () => {
            dispatch(addCounter())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counters)