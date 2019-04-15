import React from 'react';
import { Pane, Heading, BackButton } from 'evergreen-ui';
import { connect } from 'react-redux';
import Title from './AppBar.styled';
import { history } from '../../redux/store/configureStore';

const AppBar = ({ isDetailedView }) => {
  return (
    <Pane display="flex" padding={16} background="#14B5D0">
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>
          <Title>
            {isDetailedView ? 'Album Detail' : 'iTunes top 100 Albums' }
          </Title>
        </Heading>
      </Pane>
      {isDetailedView && <BackButton onClick={() => history.push('/')}>iTunes top 100 Albums</BackButton>}
    </Pane>
  );
};

const mapStateToProps = state => ({
  isDetailedView: state.router.location.pathname.includes('album'),
});

export default connect(mapStateToProps)(AppBar);
