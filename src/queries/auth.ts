import { useMutation } from '@tanstack/react-query';

import { loginApi, LoginRequest, LoginResponse } from '@/apis/auth';

export type OnSuccessLogin = (response: any, parameter: any, context: any) => void;

export const useLoginMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: ({ request, response }: { request: LoginRequest; response: LoginResponse }) => void;
  onError?: ({ request, error }: { request: LoginRequest; error: Error }) => void;
}) => {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (response, parameter, context) => {
      if (onSuccess) onSuccess({ request: parameter, response });
    },
    onError: (error, request) => {
      if (onError) onError({ request, error });
    },
  });
};
