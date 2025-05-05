public class WalletProcessor {
    public void deposit(Wallet wallet, float creditAmount) {
        if(creditAmount<0){
            throw new NegativeAmountException(ErrorMessages.negativeAmount);
        }
        float balance = wallet.getBalance();
        wallet.setBalance(balance + creditAmount);
    }

    public void withdraw(Wallet wallet, float debitAmount) {
        if(debitAmount<0){
            throw new NegativeAmountException(ErrorMessages.negativeAmount);
        }
        float balance = wallet.getBalance();
        if((balance-debitAmount)<0){
            throw new InsufficientFundsException(ErrorMessages.insufficientFunds);
        }
        wallet.setBalance(balance - debitAmount);
    }
}