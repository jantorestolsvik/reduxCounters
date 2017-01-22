import {connect} from 'react-redux'
import {Counter} from '../components/counter';

let mapStateToProps = (state) => ({
    state
});

export default connect(
    mapStateToProps
)(Counter)