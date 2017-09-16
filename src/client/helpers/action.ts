export interface Action {
  type: string;
  error?: string | boolean;
  inProgress?: boolean;
}
