import React from 'react';
import { withRouter } from 'react-router-dom';
import { Pane } from 'evergreen-ui';
import ListItem from '../ListItem';

const mapCharts = (entries, history) =>
  entries.map(entry => <ListItem onPressDown={() => history.push({ pathname: '/album/', state: { url: `${entry.title.label}` } })} key={entry.id.attributes['im:id']} entry={entry} />);

const List = ({ feed, history }) => {
  return (
    <Pane>
      {feed && feed.entry && mapCharts(feed.entry, history)}
    </Pane>
  );
};

export default withRouter(List);
