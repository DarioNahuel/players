import { createSelector } from 'reselect'

export const getPlayers = state => {
  return state.players.items;
}

const getPlayerCriteria = state => state.players.criteria;

export const getVisiblePlayers = createSelector(
  [getPlayerCriteria, getPlayers],
  (criteria, players) => {
    let data = [...players];

    if (criteria && criteria.name) {
      data = data.filter(item => item.name.toLowerCase().includes(criteria.name.toLowerCase()));
    }

    if (criteria && criteria.position) {
      data = data.filter(item => item.position === criteria.position);
    }

    if (criteria && criteria.age) {
      data = data.filter(item => item.age === criteria.age);
    }

    return {
        items: data,
    };
  })