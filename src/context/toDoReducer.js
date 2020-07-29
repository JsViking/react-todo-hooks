export default (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          finshed: false
        }
      ]
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            finshed: action.checked
          }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}