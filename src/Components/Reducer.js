const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CARDS':
      let obj = state.cards.find(x => x.props.name === action.payload[0].props.name);
      if (state.cards.indexOf(obj) !== -1) {
        alert('Already existing Profile')
        return { ...state }
      }
      else {
        return {
          ...state,
          cards: state.cards.concat(action.payload)
        };
      }

    case 'DELETE_CARDS':
      return {
        ...state,
        cards: state.cards.filter(card => card.props.name !== action.payload)
      };
    case 'SORT_CARDS_BY_NAME':
      return {
        ...state,
        cards: state.cards.sort(compareName)
      };
    case 'SORT_CARDS_BY_FOLLOWERS':
      return {
        ...state,
        cards: state.cards.sort(compareFollowers)
      }
    case 'SORT_CARDS_BY_LOCATION':
      return {
        ...state,
        cards: state.cards.sort(compareLocation)
      }
    default:
      return state;
  }
};

//i know below functions are repeated again and again, but due to time constraints, i was unable to make it non-redundant
//comparer function for sort by name
function compareName(a, b) {
  if (a.props.name < b.props.name) {
    return -1;
  }
  if (a.props.name > b.props.name) {
    return 1;
  }
  return 0;
}
//comparer function for sort by followers
function compareFollowers(a, b) {
  if (a.props.followers < b.props.followers) {
    return -1;
  }
  if (a.props.followers > b.props.followers) {
    return 1;
  }
  return 0;
}
//comparer function for sort by location
function compareLocation(a, b) {
  if (a.props.location < b.props.location) {
    return -1;
  }
  if (a.props.location > b.props.location) {
    return 1;
  }
  return 0;
}
export default Reducer;