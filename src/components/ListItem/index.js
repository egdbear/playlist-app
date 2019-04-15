import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'evergreen-ui';
import {
  StyledAvatar,
  StyledText,
  StyledCell,
  StyledCellName,
} from './ListItem.styled';

const ListItem = ({ entry, onPressDown }) => (
  <Table.Row isSelectable onSelect={onPressDown} height={100}>
    <Table.TextCell flexBasis={150} flexShrink={0} flexGrow={0}>
      <StyledAvatar alt="img" src={entry['im:image'][2].label} />
    </Table.TextCell>
    <StyledCell flexBasis="200px">
      <StyledText>{`${entry['im:artist'].label}`}</StyledText>
    </StyledCell>
    <StyledCellName flexBasis="200px" flexGrow="1">
      <StyledText>{`${entry['im:name'].label}`}</StyledText>
    </StyledCellName>
  </Table.Row>
);

ListItem.propTypes = {
  entry: PropTypes.object.isRequired, // eslint-disable-line
};

export default ListItem;
