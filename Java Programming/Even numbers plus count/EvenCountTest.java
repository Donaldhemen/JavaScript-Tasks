import org.junit.jupiter.api.Test;

import static    org.junit.jupiter.api.Assertions.*;



public class EvenCountTest {

    @Test
    public void testToCollectEvenNumbersInAnArrayAndAddTheEvenNumberCount(){
    //Given
    int[] numbers = {1, 2, 3, 4, 5};
    
    //When
    int[] expectedEvenCount = EvenCount.collectEvenNumberAndCount(numbers);
    int[] actualEvenCount = {2, 4, 2};

    //Check
    assertArrayEquals(actualEvenCount, expectedEvenCount);

    }
}
