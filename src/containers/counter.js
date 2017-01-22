import {connect} from 'react-redux'
import {Counter} from '../components/counter';
import {increment, decrement} from '../actions/counter';

let mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => {dispatch(increment(ownProps.counter.id))},
        decrement: () => {dispatch(decrement(ownProps.counter.id))}
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Counter)