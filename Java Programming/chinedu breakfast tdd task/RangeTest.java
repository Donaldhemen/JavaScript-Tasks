import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;



public class RangeTest{
    
   @Test
   public void testToFindDifferenceBetweenTheLargestAndSmallestNumberInAGivenArray(){
   
   //Given
   int[] array = {2, 5, 1, 9, 7};
   
   //When
   int expectedRange = Range.findTheRangeOf(array);
   int actualRange = 8;
   
   //Check
   assertEquals(actualRange, expectedRange);
   }
   
//   @Test
//   public void testToFindRangeOfAGivenArrayConsideringOnlyThePositiveNumbers(){
//   
//   //Given
//   int[] array = {-2, -1, 5, 10, 7};
//   
//   //When
//    int expectedPositiveRange = Range.findPositiveRangeOf(array);
//    int actualPositiveRange = 5;
//    
//    //Check 
//    assertEquals(actualPositiveRange, expectedPositiveRange);
//   }
}
