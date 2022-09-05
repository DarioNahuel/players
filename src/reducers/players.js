import { Types } from '../actions/players';

const initialState = {
  items: [],
  criteria: {},
};

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PLAYERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      };
    case Types.FILTER_BY_NAME:
        return {
            ...state,
            criteria: {
              ...state.criteria,
              name: action.payload.filter_by_name,
            }
        }
    case Types.FILTER_BY_POSITION:
        return {
            ...state,
            criteria: {
              ...state.criteria,
              position: action.payload.filter_by_position,
            }
        }
    case Types.FILTER_BY_AGE:
        return {
          ...state,
          criteria: {
            ...state.criteria,
            age: action.payload.filter_by_age,
          }
        }
    default:
      return state;
  }
};
