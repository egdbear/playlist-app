import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Spinner from '../components/Spinner';
import { fetchItunes } from '../redux/actions/itunes';
import itunesSelector from '../redux/selectors';
import Base from './Home.styled';
import List from '../components/List';

class Home extends React.Component {
  componentDidMount() {
    const { getTopArtists } = this.props;
    getTopArtists();
  }

  render() {
    const { itunes } = this.props;
    return (
      <Base>
        {itunes.isFetching ? <Spinner /> : <List feed={itunes.feed} />}
      </Base>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getTopArtists: fetchItunes }, dispatch),
});

const mapStateToProps = state => ({
  itunes: itunesSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


Home.propTypes = {
  getTopArtists: propTypes.func.isRequired,
  itunes: propTypes.object, // eslint-disable-line
};
