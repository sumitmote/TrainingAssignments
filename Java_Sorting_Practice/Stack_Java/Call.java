public class Call {

    public static void main(String[] args) {

        My_Stack s1 = new My_Stack(5);
        s1.push(10);
        s1.push(20);
        s1.push(30);
        s1.push(40);
        System.out.println(s1.peek());
        s1.pop();
        s1.pop();
        s1.pop();
        System.out.println(s1.peek());
    }

}
