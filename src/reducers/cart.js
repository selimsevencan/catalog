import numeral from 'numeral';

const initialState = {
  items: [],
  count: 0,
  total: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if ( state.items.find( item =>
          item.id === action.payload.item.id )
        )
        return state
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.item,
        ],
        count: state.count + 1,
        total: state.total + numeral(action.payload.item.price).value(),
      };
    case 'REMOVE_FROM_CART':
      const priceOfRemovedItem = state.items.find(item =>
          item.id === action.payload.id);
      return {
        ...state,
        items:  state.items.filter(item =>
          item.id !== action.payload.id
        ),
        count: state.count - 1,
        total: state.total - numeral(priceOfRemovedItem.price).value(),
      };
    default:
      return state;
  }
};