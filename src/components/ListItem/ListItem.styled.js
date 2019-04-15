import styled from 'styled-components';
import { Table, Text } from 'evergreen-ui';

export const StyledAvatar = styled.img`
  width: 100px;
`;

export const StyledText = styled(Text)`
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const StyledCell = styled(Table.TextCell)`
  flex-basis: ${props => props.flexBasis};
  flex-shrink: 0;
  flex-grow: 0;

  @media (max-width: 500px) {
    flex-basis: 100px;
  }
`;

export const StyledCellName = styled(StyledCell)`
  flex-basis: max-content;
  flex-shrink: 0;
  flex-grow: 1;
`;
