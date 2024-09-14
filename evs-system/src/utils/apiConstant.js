// apiRoutes.js
export const HOST = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";
export const ADMIN_ROUTES = `${HOST}/admin`;
export const TEACHER_ROUTES = `${HOST}/teacher`;
export const STUDENT_ROUTES = `${HOST}/student`;
export const AUTH_ROUTES = `${HOST}/auth`;

export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;
export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`;
