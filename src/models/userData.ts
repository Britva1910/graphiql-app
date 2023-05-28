export interface IUserAuthData {
  email: string;
  password: string;
}

export interface IAlertSettings {
  severity: 'error' | 'info' | 'success' | 'warning';
  message?: string;
}
