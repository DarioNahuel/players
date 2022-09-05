import axios from 'axios';

export const getPlayers = () => {
  return axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty', {
    params: {
      total: 1000,
      per_page: 12
    }
  });
};
