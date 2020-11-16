/*
 * Reducer actions related with phone
 */
import * as types from './types';
import {ApiResponse, ListPhonesResponse} from 'app/models/api/phone';

export interface PhoneRequestType extends ReturnType<typeof onPhoneRequest> {}
export interface PhoneResponseType extends ReturnType<typeof onPhoneResponse> {}
export interface PhoneResetType extends ReturnType<typeof phoneReset> {}
export interface PhoneFailedType extends ReturnType<typeof phoneFailed> {}
export interface PhoneFailedType extends ReturnType<typeof phoneFailed> {}
export interface PhoneEnableLoaderType
  extends ReturnType<typeof enableLoader> {}

export type PhoneAction =
  | PhoneRequestType
  | PhoneResponseType
  | PhoneResetType
  | PhoneFailedType
  | PhoneEnableLoaderType;

export function onPhoneRequest(page?: number) {
  return <const>{
    type: types.PHONE_REQUEST,
    page,
  };
}

export function onPhoneResponse(response: ApiResponse<ListPhonesResponse>) {
  return <const>{
    type: types.PHONE_RESPONSE,
    response,
  };
}

export function phoneReset() {
  return <const>{
    type: types.PHONE_RESET,
  };
}

export function phoneFailed() {
  return <const>{
    type: types.PHONE_FAILED,
  };
}

export function enableLoader() {
  return <const>{
    type: types.PHONE_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return <const>{
    type: types.PHONE_DISABLE_LOADER,
  };
}
