import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './common/header/index.js';
import store from './store/index.js'

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
            <Route path='/' exact element={<div>home</div>}>home</Route>
            <Route path='/detail' exact element={<div>detail</div>}>home</Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}
 
export default App;
