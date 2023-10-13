public class Panagram {
    
    
    static void pana(String s){
        s = s.toLowerCase();
        Boolean ispresent = true;
        for(char c = 'a'; c <= 'z';c++){
            if(s.contains(String.valueOf(c))){
                ispresent = true;
            }else 
            {
                ispresent = false;
            }
        }
        if(ispresent){
            System.out.println("The string is a panagram");
        }else{
            System.out.println("The String is not a panagram");
        }
    }
    public static void main(String[] args) {
          String s = "abcdefghijklmnopqrstuvwxy";
          pana(s);
    }
}
