import { applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer';
import counterReducer from '../reducer/counterReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;