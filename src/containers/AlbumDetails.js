import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import { fetchAlbumDetails } from '../redux/actions/itunes';
import itunesSelector from '../redux/selectors';
import { itunesAlbumDetails } from '../services/urls';
import Tracks from '../components/Album/Tracks';
import Details from '../components/Album/Details';
import StyledContainer from './AlbumDetails.styled';

const getAlbum = (results) => {
  return results.find(el => el.wrapperType === 'collection');
};

const getTracks = (results) => {
  return results.filter(el => el.wrapperType === 'track');
};

class AlbumDetails extends React.Component {
  componentDidMount() {
    const { getAlbumDetails, location: { state } } = this.props;
    getAlbumDetails(`${itunesAlbumDetails}?${state.url}&entity=album,song`);
  }

  render() {
    const { itunes: { isFetching, albumDetails } } = this.props;
    if (isFetching || !albumDetails || !albumDetails.results) return <Spinner />;
    const tracks = getTracks(albumDetails.results);
    const album = getAlbum(albumDetails.results);
    return (
      <StyledContainer padding={24} alignItems="flex-start" display="flex" justifyContent="center">
        <Details album={album} />
        {tracks.length > 0 && <Tracks tracks={tracks} />}
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getAlbumDetails: fetchAlbumDetails }, dispatch),
});

const mapStateToProps = state => ({
  itunes: itunesSelector(state),
  location: state.router.location,
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);
