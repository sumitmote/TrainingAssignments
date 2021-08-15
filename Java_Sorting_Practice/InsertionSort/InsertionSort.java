import java.util.*;

public class InsertionSort {

    public static int[] insetionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int j = i;
            while ((j > 0) && (arr[j - 1] > arr[j])) {
                int temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        int arr[] = new int[] {23,4,244,5,33,22,55,11,0};
        arr = insetionSort(arr);
        System.out.println(Arrays.toString(arr));
    }

}