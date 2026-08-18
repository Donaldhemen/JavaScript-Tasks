import java.util.Arrays;
public class StatisticsCalculator{




	public static int calculateRangeOf(int[] numbers){
	
		return findLargestNumberIn(numbers) - findSmallestNumberIn(numbers);

	}


	private static int findLargestNumberIn(int[] numbers){
		int largest = numbers[0];
		for(int index = 0; index < numbers.length; index++){
			if(numbers[index] > largest)
				largest = numbers[index];
		}
		return largest;
	}

	private static int findSmallestNumberIn(int[] numbers){
		int smallest = numbers[0];
		for(int index = 0; index < numbers.length; index++){
			if(numbers[index] < smallest){
				smallest = numbers[index];
				}
		}
		return smallest;
	}
    
    public static double calculateAverageOf(int[] numbers){
        double sum = 0;
        for(int index = 0; index < numbers.length; index++){
            sum += numbers[index];
        }
        double average = sum / numbers.length;
        return average;

    }
    
    public static int calculateTheMedianOf(int[] numbers){
        numbers = inAscendingOrder(numbers);        

        int median = numbers[0];
        int medianIndex = numbers.length / 2;
        
        if (numbers.length % 2 == 0) {
            median = (numbers[medianIndex] + numbers[medianIndex -1]) / 2;
        }
        else {
            median = numbers[medianIndex];
        }

        return median;
        
    }
    private static int[] inAscendingOrder(int[] numbers){ 
		
		for(int count = 0; count < numbers.length; count++){ 
            int swap = 0;
			for(int compare = 0; compare < numbers.length; compare++){ 
                if(numbers[count] < numbers[compare]){
                    swap = numbers[count];
                    numbers[count] = numbers[compare];
                    numbers[compare] = swap;
                }
            }
              
		}
		return numbers;
    }
    
    public static int calculateTheModeOf(int[] numbers){
        
        int modecount = 0;
        for(int count = 0; count < numbers.length; count++){
            
           for(int index = 0; index < numbers.length; index++){
                if ( numbers[index] == numbers[count]){
                    modecount = numbers[count];
                }
            }
        }
        return modecount;
    }

    public static double calculateTheDeviationOf(double[] numbers){
        double deviation = 0;
        double mean = calculateAverageOf(numbers);
        double deviationSum = 0;
        for(int count = 0; count < numbers.length; count++){
            deviation = numbers[count] - mean;
            deviation = Math.abs (deviation);
            deviationSum += deviation;
        }
        double meanDeviation = deviationSum / numbers.length;
        return meanDeviation;
    }
}
