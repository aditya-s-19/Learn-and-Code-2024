public class Main{
    public static void main (String[] args){
        Customer myCustomer = new Customer();
        Wallet wallet = new Wallet();
        WalletProcessor walletProcessor = new WalletProcessor();

        wallet.setTotalMoney(100);
        myCustomer.setWallet(wallet);
        
        Wallet theWallet = myCustomer.getWallet();
        float payment = 2;

        if (theWallet.getTotalMoney() > payment) {
            walletProcessor.subtractMoney(theWallet, payment);
        } 
        else {
            // come back later and get my money
        }
    }
}
