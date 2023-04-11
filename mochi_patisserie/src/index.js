import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ChakraProvider} from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider  >
 
           <App/>
 </ChakraProvider>
 ,document.getElementById('root'))
    
  



