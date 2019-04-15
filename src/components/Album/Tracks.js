import React from 'react';
import {
  OrderedList,
  ListItem,
  Text,
  Strong,
} from 'evergreen-ui';

import StyledPane from './Tracks.styled';

const getSongDuration = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
};

export default ({ tracks }) => {
  return (
    <StyledPane>
      <Text>
        <Strong size={400}>Tracks:</Strong>
      </Text>
      <OrderedList display="flex" flexDirection="column">
        {tracks.map(track => <ListItem key={track.trackId}>{`${track.trackCensoredName} (${getSongDuration(track.trackTimeMillis)})`}</ListItem>)}
      </OrderedList>
    </StyledPane>
  );
};
