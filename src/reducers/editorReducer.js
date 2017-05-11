const editorInitialState = {
  backgroundColor: '#d9e3f0',
  size: '100',
  borderRadius: '0'
}

const editorReducer = (state = editorInitialState, action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_COLOR':
      return { ...state, backgroundColor: action.val }
    case 'SET_SIZE':
      return { ...state, size: action.val }
    case 'SET_BORDER_RADIUS':
      return { ...state, borderRadius: action.val }
    default:
      return state
  }
}

export default editorReducer
