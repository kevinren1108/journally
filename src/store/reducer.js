import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from  '../common/header/store/index.js'
import { reducer as homeReducer }  from '../pages/home/store/index.js'
import { reducer as detailReducer }  from '../pages/detail/store/index.js'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
});

export default reducer