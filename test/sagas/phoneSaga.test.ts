import {runSaga} from 'redux-saga';
import phoneAsync from '../../app/store/sagas/phonesSaga';
import * as phoneActions from '../../app/store/actions/phoneActions';
import {fetchPhones} from 'app/services/phoneService';

jest.mock('../../app/services/phoneService');

describe('fetchAuthorsFromApi', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  it('should process an unsuccessful page request', async () => {
    // @ts-ignore
    fetchPhones.mockImplementation(() =>
      Promise.resolve({
        data: {
          success: false,
          data: null,
        },
      }),
    );
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({state: 'test'}),
      },
      // @ts-ignore
      phoneAsync,
      phoneActions.onPhoneRequest(2),
    ).toPromise();
    expect(fetchPhones).toBeCalledWith(
      expect.objectContaining({
        pagination: 2,
      }),
    );
    expect(dispatched).toEqual([
      phoneActions.enableLoader(),
      phoneActions.phoneFailed(),
      phoneActions.disableLoader(),
    ]);
  });

  it('should process a successful page request', async () => {
    // @ts-ignore
    fetchPhones.mockImplementation(() =>
      Promise.resolve({
        data: {
          success: true,
          data: 'Hola',
        },
      }),
    );
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({state: 'test'}),
      },
      // @ts-ignore
      phoneAsync,
      phoneActions.onPhoneRequest(1),
    ).toPromise();
    expect(fetchPhones).toBeCalledWith(
      expect.objectContaining({
        pagination: 1,
      }),
    );
    expect(dispatched).toEqual([
      phoneActions.enableLoader(),
      // @ts-ignore
      phoneActions.onPhoneResponse({success: true, data: 'Hola'}),
      phoneActions.disableLoader(),
    ]);
  });
});
