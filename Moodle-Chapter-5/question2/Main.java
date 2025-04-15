public class Main{
    public static void main (String[] args){
        Customer myCustomer = new Customer();
        Wallet wallet = new Wallet();

        wallet.setTotalMoney(100);
        myCustomer.setWallet(wallet);
        
        Wallet theWallet = myCustomer.getWallet();
        WalletProcessor walletProcessor = new WalletProcessor();
        float payment = 2;

        if (theWallet.getTotalMoney() > payment) {
            walletProcessor.subtractMoney(theWallet, payment);
        } 
        else {
            // come back later and get my money
        }
    }
}
