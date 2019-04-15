import React from 'react';
import { Pane, Spinner } from 'evergreen-ui';

export default () => (
  <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
    <Spinner size={80} />
  </Pane>
);
