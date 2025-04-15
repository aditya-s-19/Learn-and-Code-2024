public class WalletProcessor {
    public void addMoney(Wallet wallet, float deposit) {
        if(deposit<0){
            throw new NegativeAmountException(ErrorMessages.negativeAmount);
        }
        float totalMoney = wallet.getTotalMoney();
        wallet.setTotalMoney(totalMoney + deposit);
    }

    public void subtractMoney(Wallet wallet, float debit) {
        if(debit<0){
            throw new NegativeAmountException(ErrorMessages.negativeAmount);
        }
        float totalMoney = wallet.getTotalMoney();
        if((totalMoney-debit)<0){
            throw new InsufficientFundsException(ErrorMessages.insufficientFunds);
        }
        wallet.setTotalMoney(totalMoney - debit);
    }
}