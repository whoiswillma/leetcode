#include <assert.h>
#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b)
{
    return *(int *)b - *(int *)a;
}

int minimumCost(int *cost, int costSize)
{
    qsort(cost, costSize, sizeof(int), cmp);

    int ans = 0;

    for (int i = 0; i < costSize; i++)
    {
        if (i % 3 < 2)
        {
            ans += cost[i];
        }
    }

    return ans;
}

int main()
{
    assert(minimumCost((int[3]){1, 2, 3}, 3) == 5);
    assert(minimumCost((int[6]){6, 5, 7, 9, 2, 2}, 6) == 23);
    assert(minimumCost((int[2]){5, 5}, 2) == 10);
    printf("All tests passed!\n");
}