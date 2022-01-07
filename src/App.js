import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './common/header/index.js';
import store from './store/index.js'
import Home from './pages/home'
import Detail from './pages/detail'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/detail' exact element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}
 
export default App;
