import java.util.*;

public class Queue_Java {

    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<String>();
        queue.add("Sumit");
        queue.add("Vinay");
        queue.offer("Akshay");
        System.out.println(queue);
        queue.poll();
        System.out.println(queue);
        queue.add("Aumit");
        queue.add("Sunil");
        queue.offer("Dinesh");
        System.out.println(queue);
        System.out.println(queue.size());
    }

}