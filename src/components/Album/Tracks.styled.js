import styled from 'styled-components';
import { Pane } from 'evergreen-ui';

const StyledContainer = styled(Pane)`
  margin-left: 30px;

  @media (max-width: 550px) {
    margin-left: 0px;
    margin-top: 15px;
  }
`;

export default StyledContainer;
