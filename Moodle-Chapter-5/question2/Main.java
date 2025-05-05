public class Main{
    public static void main (String[] args){
        try {
            Customer myCustomer = new Customer();
            Wallet wallet = new Wallet();
            WalletProcessor walletProcessor = new WalletProcessor();
            float payment = 2;

            wallet.setBalance(10);
            myCustomer.setWallet(wallet);

            Wallet theWallet = myCustomer.getWallet();

            if (theWallet.getBalance() >= payment) {
                walletProcessor.withdraw(theWallet, payment);
                System.out.println(LoggerMessages.paymentSuccessfulRemainingBalance + theWallet.getBalance());
            } else {
                System.out.println(LoggerMessages.insufficientFundsPleaseComeBackLater);
            }
        } catch (NegativeAmountException | InsufficientFundsException e) {
            System.out.println(LoggerMessages.transactionFailed + e.getMessage());
        } catch (Exception e) {
            System.out.println(LoggerMessages.anUnexpectedErrorOccurred + e.getMessage());
        }
    }
}
