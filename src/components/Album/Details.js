import React from 'react';
import { Pane, Text, Strong } from 'evergreen-ui';
import StyledImage from './Details.styled';

const replaceImageUrl = url => url.replace('100x100', '500x500');

export default ({ album }) => {
  return (
    <Pane alignItems="center">
      <Pane>
        <StyledImage alt="img" src={replaceImageUrl(album.artworkUrl100)} />
      </Pane>
      <Pane marginTop={10}>
        <Text>
          <Strong>Artist: </Strong>
          {album.artistName}
        </Text>
      </Pane>
      <Pane>
        <Text>
          <Strong>Title: </Strong>
          {album.collectionCensoredName}
        </Text>
      </Pane>
      <Pane>
        <Text>
          <Strong>Released: </Strong>
          {new Date(album.releaseDate).toLocaleDateString().substring(0, 10)}
        </Text>
      </Pane>
      <Pane>
        <Text>
          <Strong>Price: </Strong>
          {`${album.collectionPrice} $`}
        </Text>
      </Pane>
    </Pane>
  );
};
