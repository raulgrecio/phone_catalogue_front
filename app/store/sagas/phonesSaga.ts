/* Redux saga class
 * phones the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import {call, put, delay} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {AxiosResponse} from 'axios';

import locale from 'app/constants/es';
import {ApiResponse, ListPhonesResponse} from 'app/models/api/phone';
import {fetchPhones} from 'app/services/phoneService';
import * as phoneActions from 'app/store/actions/phoneActions';
import {PhoneRequestType} from 'app/store/actions/phoneActions';

// Our worker Saga that phones the user
export default function* phonesAsync(action: PhoneRequestType) {
  yield put(phoneActions.enableLoader());

  //how to call api
  yield delay(4000);

  const response: AxiosResponse<ApiResponse<ListPhonesResponse>> = yield call(
    fetchPhones,
    {
      pagination: action.page,
    },
  );

  if (response?.data.success) {
    yield put(phoneActions.onPhoneResponse(response.data));
    yield put(phoneActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(phoneActions.phoneFailed());
    yield put(phoneActions.disableLoader());

    setTimeout(() => {
      Alert.alert(
        'Phone catalog',
        response?.data?.message || locale.errors.offLine,
      );
    }, 200);
  }
}
