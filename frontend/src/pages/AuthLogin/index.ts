import { AuthLoginCognito } from "./AuthLoginCognito";
import { AuthLoginLoginGov } from "./AuthLoginLoginGov";

export const AuthLogin = process.env.REACT_APP_USE_COGNITO ? AuthLoginCognito: AuthLoginLoginGov;
