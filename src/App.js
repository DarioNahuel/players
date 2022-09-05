import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlayersRequest } from './actions/players';

import Box from '@mui/material/Box';

import PlayersTable from './components/PlayersTable';
import InputName from './components/InputName';
import SelectPosition from './components/SelectPosition';
import InputAge from './components/InputAge';

import { getVisiblePlayers } from './selectors/players';

const App = props => {
  const { getPlayersRequest, players } = props;

  useEffect(() => {
    getPlayersRequest();
  }, [getPlayersRequest]);

  const positions = [...new Set(players.items.map(item => item.position))];

  return (
    <>
      <h1>Football Player Finder</h1>
      <Box
          component="form"
          sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
      >
        <InputName />
        <SelectPosition positions={positions} />
        <InputAge />
      </Box>
      <PlayersTable players={players.items} />
    </>
  );
};

export default connect(
  (state) => {
    return {
      players: getVisiblePlayers(state),
    }
  
  },
  {
    getPlayersRequest,
  }
)(App);
