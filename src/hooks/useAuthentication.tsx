import { useAppSelector } from "../redux/hooks";

const useAuthentication = () => {
  const loggedInUser = useAppSelector((state) => state.persistedReducer.auth);
  const isAuthenticated = loggedInUser.value.kind === "AUTHORIZED";

  return {
    isAuthenticated,
    payload:
      loggedInUser.value.kind === "AUTHORIZED"
        ? loggedInUser.value.payload
        : null,
  };
};

export default useAuthentication;
