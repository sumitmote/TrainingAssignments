class Bubble_Java {
    void bubbleSort(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++)
            for (int j = 0; j < n - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    // swap arr[j+1] and arr[j]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
    }

  
    void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String args[]) {
        Bubble_Java bs = new Bubble_Java();
        int arr[] = { 23, 1, 43, 13, 0, 34, 55, 667, 4 };
        System.out.println("Unsorted array : ");
        bs.printArray(arr);
        bs.bubbleSort(arr);
        System.out.println("Sorted array : ");
        bs.printArray(arr);
    }
}