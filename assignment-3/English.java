import java.util.Scanner;

public class English {
    public static void main (String []args) {
        String sentence;
        String letter;
        Scanner sc = new Scanner(System.in);
        System.out.println("Sentence: ");
        sentence = sc.next();
        System.out.println("Letter you want to find: ");
        letter = sc.next();

        int index = findLetterIndex(sentence,letter) ;

        String result;
        if (index == -1) {
            System.out.println("Result: The letter does not exist in the sentence");
        }
        else {
            System.out.println("Result: "+sentence.substring(index+1));
        }
    }

    public static int findLetterIndex(String sentence, String letter) {
        int index = sentence.indexOf(letter);
        return (index);
    }
}