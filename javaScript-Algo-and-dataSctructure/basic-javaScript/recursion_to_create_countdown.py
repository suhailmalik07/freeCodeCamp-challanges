def countdown(n, i=1):
    if i > n:
        return []
    else:
        countArray = countdown(n, i=i+1)
        countArray.append(i)
        return countArray


print(countdown(5))  # should return [5, 4, 3, 2, 1] using recursion.
