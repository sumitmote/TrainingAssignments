import java.util.*;

public class Selection {
    public static int[] selecitonSort(int[] list) {

        int i, j, minValue, minIndex, temp = 0;

        for (i = 0; i < list.length; i++) {
            minValue = list[i];
            minIndex = i;
            for (j = i; j < list.length; j++) {
                if (list[j] < minValue) {
                    minValue = list[j];
                    minIndex = j;
                }
            }

            if (minValue < list[i]) {
                temp = list[i];
                list[i] = list[minIndex];
                list[minIndex] = temp;

            }
        }
        return list;
    }

    public static void main(String[] args) {
        int arr[] = new int[] { 23, 4, 244, 5, 33, 22, 55, 11, 0 };
        arr = selecitonSort(arr);
        System.out.println(Arrays.toString(arr));
    }

}
