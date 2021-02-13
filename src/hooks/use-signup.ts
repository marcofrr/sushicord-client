import { useMutation } from "@apollo/client";

import { MUTATION_SIGNUP, MUTATION_LOGIN } from "../graphql/mutations";

interface InputProps {
  email: string;
  userName: string;
  password: string;
  birthDate: string;
}

export const useSignup = (): [
  (input: InputProps) => Promise<boolean>,
  boolean
] => {
  const [mutateSignup, { loading: loadingSignup }] = useMutation(
    MUTATION_SIGNUP
  );
  const [mutateLogin, { loading: loadingLogin }] = useMutation(MUTATION_LOGIN);

  const signup = async (input: InputProps): Promise<boolean> => {
    const { email, userName, password, birthDate } = input;
    const { data: signupData } = await mutateSignup({
      variables: { email, userName, password, birthDate },
    });

    if (!signupData) return false;

    const { data: loginData } = await mutateLogin({
      variables: { email, password },
    });

    if (!loginData) return false;

    localStorage.setItem("token", loginData.login.token);

    return true;
  };
  //return [signup, loadingSignup];
  return [signup, loadingSignup || loadingLogin];
};
