
public class My_Stack {

    private int arr[];
    private int top;
    private int capacity;

    public My_Stack() {
    }

    public My_Stack(int capacity) {
        this.arr = new int[capacity];
        this.capacity = capacity;
        this.top = -1;
    }

    public void push(int i) {
        if (isFull()) {
            throw new RuntimeException("Stack Is Full");
        }
        arr[++top] = i;
    }

    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack Is Empty");
        }
        return arr[top--];
    }

    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack Is Empty");
        }
        return arr[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public boolean isFull() {
        return top == capacity - 1;
    }

}
