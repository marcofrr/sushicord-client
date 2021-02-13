import { useMutation } from "@apollo/client";

import { MUTATION_LOGIN } from "../graphql/mutations";

interface InputProps {
  email: string;
  password: string;
}

export const useLogin = (): [
  (input: InputProps) => Promise<boolean>,
  boolean
] => {
  const [mutateLogin, { loading: LoadingLogin }] = useMutation(MUTATION_LOGIN);

  const login = async (input: InputProps): Promise<boolean> => {
    const { email, password } = input;

    const { data: loginData } = await mutateLogin({
      variables: { email, password },
    });

    if (!loginData) {
      return false;
    }

    localStorage.setItem("token", loginData.login.token);
    localStorage.setItem("currentUserId", loginData.login.user.id);
    localStorage.setItem("currentUserName", loginData.login.user.userName);

    return true;
  };

  return [login, LoadingLogin];
};
