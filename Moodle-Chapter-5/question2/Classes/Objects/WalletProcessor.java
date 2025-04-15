public class WalletProcessor {
    public void addMoney(Wallet wallet, float deposit) {
        if(deposit<0){
            throw new NegativeAmountException(ErrorMessages.NEGATIVE_AMOUNT);
        }
        float totalMoney = wallet.getTotalMoney();
        wallet.setTotalMoney(totalMoney + deposit);
    }

    public void subtractMoney(Wallet wallet, float debit) {
        if(debit<0){
            throw new NegativeAmountException(ErrorMessages.NEGATIVE_AMOUNT);
        }
        float totalMoney = wallet.getTotalMoney();
        if((totalMoney-debit)<0){
            throw new InsufficientFundsException(ErrorMessages.INSUFFICIENT_FUNDS);
        }
        wallet.setTotalMoney(totalMoney - debit);
    }
}