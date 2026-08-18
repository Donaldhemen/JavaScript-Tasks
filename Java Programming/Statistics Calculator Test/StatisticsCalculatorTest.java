import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;



public class StatisticsCalculatorTest{
	
	@Test
	public void testThatIHaveAnArrayOfNumbersTheLargestIsTheLargestInTheArray(){

	//Given
	int [] numbers = {3, 5, 7, 1, 25, 11, 0};

	//When
	int expectedRange = StatisticsCalculator.calculateRangeOf(numbers);

	int actualRange = 25;

	//Check
	assertEquals(actualRange, expectedRange);



	}

    @Test
    public void testThatIFindTheMeanInAGivenArrayOfNumbers(){
    
    //Given
        double[] numbers = {5, 12, 8, 10, 11, 17, 16, 9};

    //When
        double expectedMean = StatisticsCalculator.calculateAverageOf(numbers);
    
        double actualMean = 11.0;
    //Check
        assertEquals(actualMean, expectedMean);

    }

    @Test
    public void testThatIFindTheMedianInAGivenArrayOfNumbers(){

    //Given
        int [] numbers = {3, 5, 7, 1, 25, 11, 0};

    //When
        int expectedMedian = StatisticsCalculator.calculateTheMedianOf(numbers);

        int actualMedian = 5;
    
    //Check
        assertEquals(actualMedian, expectedMedian);


    }

    @Test
    public void testThatIFindTheHighestOccurringNumberInAGivenArrayOfNumbers(){
  
    //Given    
        int[] numbers = {5, 12, 8, 10, 11, 17, 16, 8};

    //When
        int expectedMode = StatisticsCalculator.calculateTheModeOf(numbers);

        int actualMode = 8;

    //Check
        assertEquals(actualMode, expectedMode);

    }

    @Test 
    public void  testToFindOutTheMeanDeviationOfAGivenArrayOfNumbers(){
    
    //Given
        double [] numbers = {5.0, 12.0, 8.0, 10.0, 11.0, 17.0, 16.0, 9.0};

    //When
        double expectedDeviation = StatisticsCalculator.calculateTheDeviationOf(numbers);
        double actualDeviation = 3.0;

    //Check
        assertEquals(actualDeviation, expectedDeviation);
    }

}
