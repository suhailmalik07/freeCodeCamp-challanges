function sum(arr, n) {
    if (n <= 0) {
        return 0
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
}

// Print sum of n-elements from a list using recursion