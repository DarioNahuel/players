import dayjs from 'dayjs';

export const Types = {
    GET_PLAYERS_REQUEST: 'GET_PLAYERS_REQUEST',
    GET_PLAYERS_SUCCESS: 'GET_PLAYERS_SUCCESS',
    FILTER_BY_NAME: 'FILTER_BY_NAME',
    FILTER_BY_POSITION: 'FILTER_BY_POSITION',
    FILTER_BY_AGE: 'FILTER_BY_AGE',
};
  
export const getPlayersRequest = () => ({
type: Types.GET_PLAYERS_REQUEST
});
  
export const getPlayersSuccess = items => {

    let players = Object.values(items).filter(item => item.name);
    players = players.map(player => ({
        ...player,
        age: dayjs(new Date()).diff(player.dateOfBirth, 'year')
    }));

    return {
        type: Types.GET_PLAYERS_SUCCESS,
        payload: { items: players },
    }
};

export const filterByName = (name) => {
    return {
        type: Types.FILTER_BY_NAME,
        payload: {
            filter_by_name: name,
        },
    }
}

export const filterByPosition = (position) => {
    return {
        type: Types.FILTER_BY_POSITION,
        payload: {
            filter_by_position: position,
        },
    }
}

export const filterByAge = (age) => {
    return {
        type: Types.FILTER_BY_AGE,
        payload: {
            filter_by_age: parseInt(age, 10),
        },
    }
}
  