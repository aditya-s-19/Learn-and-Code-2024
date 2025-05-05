public class Wallet {
    private float balance;

    public float getBalance() {
        return this.balance;
    }

    public void setBalance(float newBalance) {
        if(newbalance>=0){
            this.balance = newBalance;
        }else{
            throw new NegativeAmountException(ErrorMessages.negativeAmount);
        }
    }
}