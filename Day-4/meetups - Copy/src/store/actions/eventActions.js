import axios from "axios";

export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
export const GET_EVENTS_ERROR = "GET_EVENTS_ERROR";
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS";
export const GET_EVENT_ERROR = "GET_EVENT_ERROR";
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
export const ADD_EVENT_ERROR = "ADD_EVENT_ERROR";
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS";
export const UPDATE_EVENT_ERROR = "UPDATE_EVENT_ERROR";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_ERROR = "DELETE_EVENT_ERROR";

export const getEvents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/events");
      dispatch({ type: GET_EVENTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_EVENTS_ERROR, payload: error.message });
    }
  };
};

export const getEvent = (eventId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/events/${eventId}`
      );
      dispatch({ type: GET_EVENT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_EVENT_ERROR, payload: error.message });
    }
  };
};

export const addEvent = (eventData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/events",
        eventData
      );
      dispatch({ type: ADD_EVENT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_EVENT_ERROR, payload: error.message });
    }
  };
};

export const updateEvent = (eventId, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/events/${eventId}`,
        updatedData
      );
      dispatch({ type: UPDATE_EVENT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_EVENT_ERROR, payload: error.message });
    }
  };
};

export const deleteEvent = (eventId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/events/${eventId}`);
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: eventId });
    } catch (error) {
      dispatch({ type: DELETE_EVENT_ERROR, payload: error.message });
    }
  };
};
