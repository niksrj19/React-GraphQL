import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import "./style/style.css"
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Routes,
  IndexRoute,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SongLists from './components/SongLists';
import App from "./components/App";
import SongCreate from './components/SongCreate';
import SongDetails from './components/SongDetails';
const client =new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache:new InMemoryCache(),
  dataFromObject :o=>o.id  // update when child record hange 
});
const Root = () => {
  return (
    <Router >
      <Routes>
        <Route exact path="/" element={<SongLists/>}/>
        <Route exact path="/createsong" element={<SongCreate/>}/>
        <Route exact path="/song/:id" element={<SongDetails/>} />
       </Routes>
      
    </Router>
    )
};
ReactDOM.render(
  <ApolloProvider client={client}><Root /></ApolloProvider>,
  document.querySelector('#root')
);
