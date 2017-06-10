import { connect } from 'react-redux';
import List from './List';

const mapStateToProps = state => ({
  pets: state.pets,
});

export default connect(mapStateToProps)(List);
