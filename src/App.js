import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes} from 'react-router-dom';
import Header from './common/header/index.js';
import store from './store/index.js';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login/index.js';
import Write from './pages/write';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Provider store={store}>
        <Header />
          <Routes>
            <Route path='/login' exact element={<Login />}></Route>
            <Route path='/write' exact element={<Write />}></Route>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/detail/id=:id' exact element={<Detail />}></Route>
          </Routes>
      </Provider>
    );
  }
};
 
export default App;
