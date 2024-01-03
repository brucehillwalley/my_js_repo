const initialState = {
    todoList:[{id:new Date.getTime(), text:"Learn REdux", completed:false}]
}


export const ADD = 'ADD'
export const DEL = 'DEL'
export const CLR = 'CLR'
export const CMP = 'CMP'

export const addTodo = (payload) => ({
  type: ADD,
  payload
})



export const todoReducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return { ...state, ...payload }

  default:
    return state
  }
}
