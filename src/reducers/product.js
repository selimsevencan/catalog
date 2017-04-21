export default (state = {products: [], filterOnSale: false}, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return {
        ...state,
        filterOnSale: !state.filterOnSale
      };
    default:
      return state;
  }
};