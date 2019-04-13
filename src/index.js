import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// GET
function* getProject(action) {
    try {
      console.log('GET projects', action);
      const getResponse = yield axios.get('/project');
      const action = {type:'SET_PROJECTS', payload: getResponse.data};
      yield put(action);
   }catch (error) {
      console.log(`Couldn't get projects`, error);
      alert(`Sorry, couldn't get the projects. Try again later`);
    };
  };

  function* getTags(action) {
    try{
        console.log('GET tags for projects', action);
        const getResponse = yield axios.get('/portfolio/tags');
        const action = {type: 'SET_TAGS', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get projects`);
        alert(`Sorry couldn't get projects. Try again later.`)
    }
}
  
  // POST
  function* addProject(action) {
    try {
      console.log('add project', action);
      yield axios.post('/project', action.payload);
      yield put({ type: 'GET_PROJECT' });
    } catch (error) {
      console.log(`Couldn't add the project`, error);
      alert(`Sorry, couldn't add the project. Try again later`);
    };
  };

  //DELETE
  function* deleteProject(action) {
    try {
      console.log(action.payload);
      
      console.log('delete project', action.payload);
      yield axios.delete(`/project/${action.payload}`);
      yield put({ type: 'GET_PROJECT' });
    } catch (error) {
      console.log(`Couldn't delete the project`, error);
      alert(`Sorry, couldn't delete the project. Try again later`);
    };
  };

function* watcherSaga() {
// this will watch actions and send them to other sagas 
// yield takeEvery()
    yield takeEvery('GET_PROJECT', getProject);
    yield takeEvery('ADD_PROJECT', addProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
    yield takeEvery('GET_TAGS', getTags);
}
  

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
