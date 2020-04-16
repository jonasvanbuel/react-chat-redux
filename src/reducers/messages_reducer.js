import { GET_MESSAGES, MESSAGE_POSTED } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case `${GET_MESSAGES}_PENDING`:
      return state;
    case `${GET_MESSAGES}_FULFILLED`:
      return action.payload;
    case `${MESSAGE_POSTED}_PENDING`:
      return state;
    case `${MESSAGE_POSTED}_FULFILLED`: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
}
