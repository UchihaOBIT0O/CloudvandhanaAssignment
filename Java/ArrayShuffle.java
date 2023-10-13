import java.util.Random;
import java.util.Arrays;
/**
 *
 * @author Donthula Arun
 */
public class ArrayShuffle {
    
   static void shuffle(int[] arr){
       int length = arr.length-1;
        Random j = new Random();
       for (int i = length; i > 0; i--) {
          int x = j.nextInt(i+1);
          
          int temp = arr[i];
          arr[i] = arr[x];
          arr[x] = temp;
       }
        System.out.println(Arrays.toString(arr));
    }
      
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        shuffle(arr);
    }
}
