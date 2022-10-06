import { createStore } from "redux";
import rootReducer from "./index";

// const store = createStore(rootReducer);

// export default store;

// import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

// import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const obj = () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return {  store, persistor }
}

const {store , persistor} = obj();

export {store, persistor};