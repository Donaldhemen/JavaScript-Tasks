import java.util.Scanner;
class ATM{
    public static void main(String[] args){
        Scanner userInput = new Scanner(System.in);
        int atmMenu;
        
        do{
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Check Balance");
            System.out.println("4. Exit");

            atmMenu = userInput.nextInt();
        }while(atmMenu != 4);
        System.out.println("Goodbye.");
    }
}
