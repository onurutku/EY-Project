export interface User {
  id?: string;
  email: string;
  password?: string;
  _token: string;
  _expirationDate?: number;
  authority?: string;
}
