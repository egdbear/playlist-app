import styled from 'styled-components';
import { Pane } from 'evergreen-ui';

export default styled(Pane)`
  background-color: #F1FAF5;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
