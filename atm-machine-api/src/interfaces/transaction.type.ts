export interface Transaction {
  id: string;
  accountNumber: number;
  type: 'withdrawal' | 'deposit';
  amount: number;
  date: string;
}
