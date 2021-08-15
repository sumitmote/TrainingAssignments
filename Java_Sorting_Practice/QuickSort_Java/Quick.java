import java.util.*;

public class Quick {

    public void quickSort(int[] A) {
        quickSort(A, 0, A.length - 1);
    }

    public void quickSort(int[] A, int low, int high) {
        if (low < high + 1) {
            int p = partition(A, low, high);
            quickSort(A, low, p - 1);
            quickSort(A, p + 1, high);
        }
    }

    private void swap(int[] A, int index1, int index2) {
        int temp = A[index1];
        A[index1] = A[index2];
        A[index2] = temp;
    }

    private int getPivot(int low, int high) {
        Random ran = new Random();
        return ran.nextInt((high - low) + 1) + low;
    }

    private int partition(int[] A, int low, int high) {
        swap(A, low, getPivot(low, high));
        int border = low + 1;
        for (int i = border; i <= high; i++) {
            if (A[i] < A[low]) {
                swap(A, i, border++);
            }
        }

        swap(A, low, border - 1);
        return border - 1;
    }

    public static void main(String[] args) {
        Quick q = new Quick();
        int[] A = { 23, 4, 56, 2, 11, 46, 7, 8, 1, 90, 10 };
        System.out.println(Arrays.toString(A));
        q.quickSort(A);
        System.out.println(Arrays.toString(A));
    }

}
