import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'
import  configureStore  from './stores/configureStore'
import {Provider} from 'react-redux';
import * as actions from './actions'
import Stream from './components/Stream'
import App from './components/App'
import Callback from './components/Callback'

const tracks = [
  {
    title : 'Tum hi ho'
  },
  {
    title : 'myself'
  }
]

const browserHistory = createBrowserHistory();

const store = configureStore();

store.dispatch(actions.setTracks(tracks))

const history = syncHistoryWithStore(browserHistory , store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
    <Stream />
  </Provider>
, document.getElementById('app')
)

module.hot.accept()