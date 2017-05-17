import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AutorBox from './Autor';
import LivroBox from './Livro';
import Home from './Home';
import './index.css';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';

ReactDOM.render(
  (<BrowserRouter basename="/awesome-idea-box">
	
  		<Route path="/" component={App}>
  			<IndexRoute component={Home}/>
  			<Route path="/autor" component={AutorBox}/>
  			<Route path="/livro" component={LivroBox}/>
  		</Route>
  	</BrowserRouter>
   
   ),
  document.getElementById('root')
);
