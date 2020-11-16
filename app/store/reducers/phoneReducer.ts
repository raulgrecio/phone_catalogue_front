/* Phone Reducer
 * handles phone states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import {IPhonesState} from 'app/models/reducers/phone';
import {
  IPhonesRequestState,
  IPhonesResponseState,
  ListPhonesResponseState,
} from 'app/models/actions/phone';
import {ListPhonesResponse, PhoneResponse} from 'app/models/api/phone';

const initialState: IPhonesState<ListPhonesResponseState> = {
  results: [],
  hasMore: false,
  totalResults: 0,
  page: 0,
  totalPages: 0,
  isFetching: false,
};

export const phoneReducer = createReducer(initialState, {
  [types.PHONE_REQUEST](
    state: IPhonesState<ListPhonesResponseState>,
    action: IPhonesRequestState,
  ) {
    return {
      ...state,
      page: action.page,
    };
  },
  [types.PHONE_ENABLE_LOADER](state: IPhonesState<ListPhonesResponseState>) {
    return {
      ...state,
      isFetching: true,
    };
  },
  [types.PHONE_DISABLE_LOADER](state: IPhonesState<ListPhonesResponseState>) {
    return {
      ...state,
      isFetching: false,
    };
  },
  [types.PHONE_RESPONSE](
    state: IPhonesState<ListPhonesResponseState>,
    action: IPhonesResponseState<ListPhonesResponse>,
  ) {
    return {
      ...state,
      // @ts-ignore
      results: merge(state.results, action.response.data.results),
      hasMore: action.response.data.page < action.response.data.pages,
      totalResults: action.response.data.count,
      page: action.response.data.page,
      totalPages: action.response.data.pages,
      //isFetching: false,
    };
  },
  [types.PHONE_FAILED](state: IPhonesState<ListPhonesResponseState>) {
    return {
      ...state,
    };
  },
  [types.PHONE_RESET]() {
    return initialState;
  },
});

function merge(
  listA: PhoneResponse[],
  listB: PhoneResponse[],
): PhoneResponse[] {
  const merged = [...listA, ...listB];
  return merged.filter((phone, index) => merged.indexOf(phone) === index);
}
