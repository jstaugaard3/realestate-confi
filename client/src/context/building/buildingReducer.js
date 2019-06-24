import {
  GET_BUILDINGS,
  GET_BUILDING,
  ADD_BUILDING,
  DELETE_BUILDING,
  SET_CURRENT_BUILDING,
  CLEAR_CURRENT_BUILDING,
  UPDATE_BUILDING,
  FILTER_BUILDINGS,
  CLEAR_FILTER_BUILDING,
  BUILDING_ERROR,
  CLEAR_BUILDINGS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BUILDINGS:
      return {
        ...state,
        buildings: action.payload,
        loading_building: false,
      };
    case GET_BUILDING:
        return {
        ...state,
        buildings: action.payload,
        loading_building: false,
      };
    case ADD_BUILDING:
      return {
        ...state,
        buildings: [action.payload, ...state.buildings],
        loading_building: false,
      };
    case UPDATE_BUILDING:
      return {
        ...state,
        buildings: state.buildings.map(building =>
          building._id === action.payload._id ? action.payload : building,
        ),
        loading_building: false,
      };
    case DELETE_BUILDING:
      return {
        ...state,
        buildings: state.buildings.filter(
          building => building._id !== action.payload,
        ),
        loading_building: false,
      };
    case CLEAR_BUILDINGS:
      return {
        ...state,
        buildings: null,
        filtered_building: null,
        error_building: null,
        current_building: null,
      };
    case SET_CURRENT_BUILDING:
      return {
        ...state,
        current_building: action.payload,
      };
    case CLEAR_CURRENT_BUILDING:
      return {
        ...state,
        current_building: null,
      };
    case FILTER_BUILDINGS:
      return {
        ...state,
        filtered_building: state.buildings.filter(building => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return building.street.match(regex) || building.city.match(regex) || building._id.match(regex) ;
        }),
      };
    case CLEAR_FILTER_BUILDING:
      return {
        ...state,
        filtered_building: null,
      };
    case BUILDING_ERROR:
      return {
        ...state,
        error_building: action.payload,
      };
    default:
      return state;
  }
};
