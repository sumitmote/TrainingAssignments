public class MergeSort {
    void merge(int arr[], int beg, int mid, int end) {

        int l = mid - beg + 1;
        int r = end - mid;

        int[] lArr = new int[l];
        int[] rArr = new int[r];

        for (int i = 0; i < l; ++i)
            lArr[i] = arr[beg + i];

        for (int j = 0; j < r; ++j)
            rArr[j] = arr[mid + 1 + j];

        int i = 0, j = 0;
        int k = beg;
        while (i < l && j < r) {
            if (lArr[i] <= rArr[j]) {
                arr[k] = lArr[i];
                i++;
            } else {
                arr[k] = rArr[j];
                j++;
            }
            k++;
        }
        while (i < l) {
            arr[k] = lArr[i];
            i++;
            k++;
        }

        while (j < r) {
            arr[k] = rArr[j];
            j++;
            k++;
        }
    }

    void sort(int arr[], int beg, int end) {// (array_addr , 0 , 9 )
        if (beg < end) {
            int mid = (beg + end) / 2; // mid = 4
            sort(arr, beg, mid); // (arr_address , 0 , 4) -> recursion till single remains
            sort(arr, mid + 1, end); // (arr_address , 5 , 9) -> recursion till single remains
            merge(arr, beg, mid, end);
        }
    }

    public static void main(String args[]) {
        int arr[] = { 34, 3, 12, 1, 66, 4, 11, 87, 32, 12 };
        MergeSort ms = new MergeSort(); // class object
        ms.sort(arr, 0, arr.length - 1); // (array address, 0 , 9)

        System.out.println("\nSorted array");
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i] + "");
        }
    }
}