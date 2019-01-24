import * as types from '../constants/actionTypes';

export const fetchItemsStart = () => ({
  type: types.GET_ALL_ITEMS_START
});

export const fetchedItems = resp => ({
  type: types.GET_ALL_ITEMS,
  payload: resp
});

export const fetchError = err => ({
  type: types.GET_ALL_ITEMS_ERR,
  payload: err
});

export const searchValueChange = value => ({
  type: types.SEARCH_BOX_CHANGE,
  payload: value
});


export const fetchItemsData = () => dispatch => {
  dispatch(fetchItemsStart());

  fetch('http://localhost:3000/allItems')
    .then(response => response.json())
    .then(data => {
      console.log('we got the items');
      dispatch(fetchedItems(data));
    })
    .catch(() => dispatch(fetchError));
};

export const fetchSearchedItems = search => dispatch => {
  dispatch(fetchItemsStart());

  fetch(`http://localhost:3000/search/${search}`)
    .then(response => response.json())
    .then(data => {
      console.log('we got the searched items');
      dispatch(fetchedItems(data));
    })
    .catch(() => dispatch(fetchError));
};

export const fetchCategoryItems = category => dispatch => {
  dispatch(fetchItemsStart());

  fetch(`http://localhost:3000/category/${category}`)
    .then(response => response.json())
    .then(data => {
      console.log('we got the category items');
      dispatch(fetchedItems(data));
    })
    .catch(() => dispatch(fetchError));
};

// export const searchStart = query => ({
//   type: types.SEARCH,
//   payload: query
// });

// export const login = data => ({
//   type: types.LOGIN,
//   payload: data
// });


///////// ADDING ITEM FUNCTIONALITY ////////////

export const getSearchInput= value => ({
  type: types.GET_SEARCH_INPUT,
  payload: value
});

export const fetchingItems = () => ({
  type: types.FETCHING_ITEMS
});

export const returnedItems = resp => ({
  type: types.RETURNED_ITEMS,
  payload: resp
});

export const fetchReturnedItems = search => dispatch => {
  dispatch(fetchingItems());
  console.log('this is search',search);
  fetch(`/checkupcite?val=${search}`)
    .then((response) => response.json())
    .then(data => JSON.parse(data))
    .then(bdata =>{
      console.log('this is bdata2',bdata.items);
      dispatch(returnedItems(bdata.items));
    })
    .catch(() => dispatch(fetchError));
};



