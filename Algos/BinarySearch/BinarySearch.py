import math
test_array = [-1, 0, 3, 5, 9, 12]
target = 9


def binary_search(nums, target):
    left = 0
    right = len(nums) - 1
    while left <= right:
        mid = math.floor((left + right)/2)
        value = nums[mid]
        if value == target:
            print(mid)
            return mid
        elif value < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1


binary_search(test_array, target)
