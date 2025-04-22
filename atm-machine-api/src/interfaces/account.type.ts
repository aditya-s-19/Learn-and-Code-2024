export interface Account {
  accountNumber: number;
  accountHolderName: string;
  type: 'current' | 'saving';
  currentBalance: number;
  PIN: number;
  continuousInvalidPINAttempts: number;
  blocked: boolean;
}
