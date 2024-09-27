def find_maximum(arr):
    n = len(arr)
    MAX = arr[0]
    INDEX = 0
    for i in range(1, n):
        if arr[i] > MAX:
            MAX = arr[i]
            INDEX = i
    return MAX


