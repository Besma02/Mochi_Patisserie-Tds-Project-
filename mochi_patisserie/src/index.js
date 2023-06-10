import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider} from '@chakra-ui/react'

import { Provider } from 'react-redux';
import { store } from './store/store';
import { getTotals } from './feature/CartSlice';

store.dispatch(getTotals());

ReactDOM.render(
 <ChakraProvider  >
     <Provider store={store}>

          <App/>
          </Provider>
</ChakraProvider>
,document.getElementById('root'))



