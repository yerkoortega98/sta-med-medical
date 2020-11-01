import { createStore,combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import thunk from 'redux-thunk';
// import { patientReducer } from '../reducers/patientReducer';
import { diaryReducer } from '../reducers/diaryReducer';
import { patientReducer } from '../reducers/patientReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({    
    auth: authReducer,
    ui: uiReducer,
    // patient: patientReducer,
    diary: diaryReducer,
    pacienteActivo: patientReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);