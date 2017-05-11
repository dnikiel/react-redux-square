const galleryInitialState = {
  items: []
}

const galleryReducer = (state = galleryInitialState, action) => {
  switch (action.type) {
    case 'SAVE_RECTANGLE':
      return { ...state, items: [...state.items, action.rect] }
    case 'DELETE_RECTANGLE':
      return { ...state, items: [...state.items].filter(item => item !== action.rect) }
    default:
      return state
  }
}

export default galleryReducer
