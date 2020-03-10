def sum(arr, n):
    if n <= 0:
        return 0
    else:
        return sum(arr, n-1) + arr[n-1]

print(sum([1,2,3,4], 3))

# Print sum of n-elements from a list using recursion