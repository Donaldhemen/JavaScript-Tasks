import java.util.Arrays;

public class EvenCount{
    public static int[] collectEvenNumberAndCount(int[] numbers){
        
        int evenCount = 0;
        for(int count = 0; count < numbers.length; count++){
            if(numbers[count] % 2 == 0){
                evenCount += 1;
                
            }
        }
        
        int[] evenArray = new int[evenCount + 1];
        int index = 0;

        for(int count = 0; count < numbers.length; count++){
            if(numbers[count] % 2 == 0){

                evenArray[index] = numbers[count];
                index++;
            }
        }
        evenArray[index] = evenCount;
        return evenArray;
    }     
}
