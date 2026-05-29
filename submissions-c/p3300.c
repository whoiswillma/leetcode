#include <assert.h>
#include <limits.h>
#include <stdio.h>

int sumDigits(int n)
{
    int sum = 0;

    while (n)
    {
        sum += n % 10;
        n /= 10;
    }

    return sum;
}

int minElement(int *nums, int numsSize)
{
    int min = INT_MAX;

    for (int i = 0; i < numsSize; i++)
    {
        int sum = sumDigits(nums[i]);
        if (sum < min)
        {
            min = sum;
        }
    }

    return min;
}

int main()
{
    assert(minElement((int[4]){10, 12, 13, 14}, 4) == 1);
    assert(minElement((int[4]){1, 2, 3, 4}, 4) == 1);
    assert(minElement((int[3]){999, 19, 199}, 3) == 10);
    printf("All tests passed!\n");
}