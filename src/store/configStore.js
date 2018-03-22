import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers'

const logger = createLogger();
const middleware = [logger];
const initialState = { viewForm: { status: true } };
export default function configStore(initialState) {
  return createStore(
    reducers,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}