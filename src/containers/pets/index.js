import { connect } from 'react-redux';
import Screen from './components/screen';
import { getPets } from '../../actions/pets';

const mapStateToProps = state => ({
  pets: state.pets,
});

const mapDispatchToProps = dispatch => ({
  getPets() {
    dispatch(getPets);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
