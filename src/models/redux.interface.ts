export interface Authentication {
  email: string;
  password: string;
}

export type AuthenticationState = {
  value:
    | {
        readonly kind: "UNAUTHORIZED";
      }
    | {
        readonly kind: "AUTHORIZED";
        readonly payload: Authentication;
      };
  isLogoutClick: boolean;
};

// export interface DashboardDataState {
//   value: {
//   };
// }
