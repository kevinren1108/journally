import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from  '../common/header/store/index.js'
import { reducer as homeReducer }  from '../pages/home/store/index.js'
import { reducer as detailReducer }  from '../pages/detail/store/index.js'
import { reducer as loginReducer }  from '../pages/login/store/index.js'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  loginState: loginReducer
});

export default reducer