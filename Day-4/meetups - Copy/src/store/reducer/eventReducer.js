import * as actions from "../actions/eventActions";

const initialState = {
  events: [],
  // selectedEvent: null,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_EVENTS_SUCCESS:
      console.log("GET_EVENTS Reducer-++--+--++-", action.payload);
      return {
        ...state,
        events: action.payload,
      };
    case actions.ADD_EVENT_SUCCESS:
      console.log("ADD_EVENT Reducer-++--+--++-", action.payload);
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case actions.UPDATE_EVENT_SUCCESS:
      console.log("UPDATE_EVENT Reducer-++--+--++-", action.payload);
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    case actions.DELETE_EVENT_SUCCESS:
      console.log("DELETE_EVENT Reducer-++--+--++-", action.payload);
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    // case 'GET_EVENT':
    //   return {
    //     ...state,
    //     selectedEvent: action.payload,
    //   };
    default:
      console.log("DEFAULT Reducer-++--+--++-", action);
      return state;
  }
};

export default eventReducer;
