import {applyMiddleware,createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/rootReducer';
import rootSaga from '../sagas/rootSaga';
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;