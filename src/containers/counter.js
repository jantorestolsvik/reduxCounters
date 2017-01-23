import {connect} from 'react-redux'
import {Counter} from '../components/counter';
import {decrement, increment} from '../actions/counter';

let bindActionCreators = (actionCreators, dispatch) => {
    return Object.keys(actionCreators).reduce((newActionCreators, key) => {
        newActionCreators[key] = () => {
            dispatch(actionCreators[key]())
        };
        return newActionCreators;
    }, {})
};

let mapStateToProps = (state) => ({
    state
});

let mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increment,
        decrement
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)