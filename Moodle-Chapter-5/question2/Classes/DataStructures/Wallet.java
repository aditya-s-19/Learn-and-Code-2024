public class Wallet {
    private float value;

    public float getTotalMoney() {
        return value;
    }

    public void setTotalMoney(float newValue) {
        if(newValue>=0){
            value = newValue;
        }else{
            throw new NegativeAmountException(ErrorMessages.negativeAmount);
        }
    }
}