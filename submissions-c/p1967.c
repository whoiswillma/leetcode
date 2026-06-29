#include <assert.h>
#include <string.h>

int numOfStrings(char **patterns, int patternsSize, char *word)
{
    int ans = 0;
    for (int i = 0; i < patternsSize; i++)
    {
        if (strstr(word, patterns[i]) != NULL)
        {
            ans++;
        }
    }
    return ans;
}

int main()
{
    assert(numOfStrings((char *[]){"a", "abc", "bc", "d"}, 4, "abc") == 3);
    assert(numOfStrings((char *[]){"a", "a", "a"}, 3, "ab") == 3);
}
