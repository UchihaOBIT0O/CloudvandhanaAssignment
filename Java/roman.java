import java.util.Scanner;
/**
 *
 * @author Donthula Arun
 */
public class roman {
    
    static int value(char c){
        if(c == 'I'){
            return 1;
        }else if(c == 'V'){
            return 5;
        }else if(c =='X'){
             return 10;
        }else if(c == 'L') {
             return 50;
        }else if(c == 'C'){
            return 100;
        }else if(c == 'D'){
            return 500;
        }else if(c =='M'){
            return 1000;
        }else 
        return -1;
    }
  static int convertRomanToInt(String s)
   {
       int total = 0;
       for(int i=0;i<s.length();i++){
           int s1 = value(s.toUpperCase().charAt(i));
           if( i + 1 < s.length()){
               int s2 = value(s.toUpperCase().charAt(i +1));
               if(s1 >= s2){
                   total = total + s1;
               }else{
                   total = total - s1;
               }
           }else {
                total = total + s1;
           }
       }
           return total;
   }

   public static final Scanner Sc = new Scanner(System.in);
    public static void main(String[] args) {
        System.out.println("Enter the ROMAN NUMBER: ");
        String s = Sc.next();
         System.out.println("The Number: "+convertRomanToInt(s));
    }
}
