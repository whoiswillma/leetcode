#include <assert.h>
#include <limits.h>
#include <printf.h>

int min_int(int a, int b)
{
    return a < b ? a : b;
}

int max_int(int a, int b)
{
    return a > b ? a : b;
}

int earliest(
    int *a_time, int *a_dur, int a_size,
    int *b_time, int *b_dur, int b_size)
{
    int a_min_finish = INT_MAX;
    for (int i = 0; i < a_size; i++)
    {
        a_min_finish = min_int(a_time[i] + a_dur[i], a_min_finish);
    }

    int b_min_finish = INT_MAX;
    for (int i = 0; i < b_size; i++)
    {
        b_min_finish = min_int(
            max_int(a_min_finish, b_time[i]) + b_dur[i],
            b_min_finish);
    }

    return b_min_finish;
}

int earliestFinishTime(
    int *landStartTime,
    int landStartTimeSize,
    int *landDuration,
    int landDurationSize,
    int *waterStartTime,
    int waterStartTimeSize,
    int *waterDuration,
    int waterDurationSize)
{
    return min_int(
        earliest(
            landStartTime,
            landDuration,
            landStartTimeSize,
            waterStartTime,
            waterDuration,
            waterStartTimeSize),
        earliest(
            waterStartTime,
            waterDuration,
            waterStartTimeSize,
            landStartTime,
            landDuration,
            landStartTimeSize));
}

int main()
{
    assert(
        earliestFinishTime(
            (int[2]){2, 8}, 2,
            (int[2]){4, 1}, 2,
            (int[1]){6}, 1,
            (int[1]){3}, 1) == 9);
    assert(
        earliestFinishTime(
            (int[1]){5}, 1,
            (int[1]){3}, 1,
            (int[1]){1}, 1,
            (int[1]){10}, 1) == 14);
}