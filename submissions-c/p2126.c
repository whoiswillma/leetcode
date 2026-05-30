#include <assert.h>
#include <stdbool.h>
#include <stdlib.h>

int compare(const void *a, const void *b)
{
    return *(int *)a - *(int *)b;
}

bool asteroidsDestroyed(int mass, int *asteroids, int asteroidsSize)
{
    qsort(asteroids, asteroidsSize, sizeof(int), compare);

    for (int i = 0; i < asteroidsSize; i++)
    {
        if (mass < asteroids[i])
        {
            return false;
        }

        mass += asteroids[i];

        if (mass > 1000000)
        {
            return true;
        }
    }

    return true;
}

int main()
{
    assert(asteroidsDestroyed(10, (int[5]){3, 9, 19, 5, 21}, 5));
    assert(!asteroidsDestroyed(5, (int[4]){4, 9, 23, 4}, 4));
}
