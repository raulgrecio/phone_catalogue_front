/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as themeReducer from './themeReducer';
import * as phoneReducer from './phoneReducer';

// export type LoadingReducerType = typeof loadingReducer;
// export type ThemeReducerType = typeof themeReducer;
// export type PhoneReducerType = typeof phoneReducer;

// export type ReducersType = typeof loadingReducer &
//   typeof themeReducer &
//   typeof phoneReducer;

const reducers = Object.assign(loadingReducer, themeReducer, phoneReducer);

export default reducers;
