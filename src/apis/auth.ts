import { createRequest, RequestFunction } from './instance';

export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const loginApi: RequestFunction<LoginRequest, LoginResponse> = ({ id, password }) =>
  createRequest({
    method: 'POST',
    endpoint: '/login',
    body: { id: id, password: password },
  });
