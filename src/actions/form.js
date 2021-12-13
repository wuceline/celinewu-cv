export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setName = (newValue) => ({
  type: SET_NAME,
  value: newValue,
});

export const setEmail = (newValue) => ({
  type: SET_EMAIL,
  value: newValue,
});

export const setMessage = (newValue) => ({
  type: SET_MESSAGE,
  value: newValue,
});
