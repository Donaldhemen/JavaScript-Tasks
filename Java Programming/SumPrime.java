public class SumPrime {
    public static void main(String[] args){
        int sum = 0;
        int a = 20;
        for(int count = 2; count * count <= a; count++){
            while (a % count == 0) {
                sum += count;
                a /= count;
            }
           
        }
        sum += a;

        System.out.println(sum);
    }
}
