import { types } from './types'

const initialState = {
  btnArr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'E', '<'],
  numbers: '',
  code: '1111'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET:
      if (action.payload !== 'E' && action.payload !== '<') {
        return {
          ...state,
          numbers:
            state.numbers.length < 4
              ? state.numbers + action.payload
              : state.numbers
        }
      } else if (action.payload === '<') {
        if (state.numbers !== 'Error' && state.numbers !== 'Access Granted') {
          return { ...state, numbers: state.numbers.slice(0, -1) }
        } else {
          return { ...state, numbers: '' }
        }
      } else if (action.payload === 'E') {
        if (state.numbers === state.code) {
          return { ...state, numbers: 'Access Granted' }
        } else {
          return { ...state, numbers: 'Error' }
        }
      }
    default:
      return state
  }
}
