import java.util.Arrays;


public class Range{

    public static int findTheRangeOf(int[] array){
        
       int difference = findLargestNumberIn(array) - findSmallestNumberIn(array);
        return difference;
    }
    
    private static int findLargestNumberIn(int[] array){
    
        int largest = array[0];
        for(int count = 0; count < array.length; count++){
            if(array[count] > largest){
                largest = array[count];
            }
            return largest;
        }
    
    private static int findSmallestNumberIn(int[] array){
    
        int smallest = array[0];
        for(int count = 0; count < array.length; count++){
            if(array[count] < smallest){
                smallest = array[count];
            }
        }
        return smallest;
    }
//    public static int findPositiveRangeOf(int[] array){
//    
//        return 5;
//    }
}
