public class Customer {
    private String firstName;
    private String lastName;
    private Wallet myWallet;

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String newFirstName){
        this.firstName = newFirstName;
    }

    public String getLastName(){
        return lastName;
    }

    public void setLastName(String newLastName){
        this.lastName = newLastName;
    }

    public Wallet getWallet(){
        return myWallet;
    }

    public void setWallet(Wallet newWallet){
        if (wallet == null || wallet.getTotalMoney() < 0) {
            throw new IllegalArgumentException(ErrorMessages.invalidWallet);
        }
        this.myWallet = newWallet;
    }
}