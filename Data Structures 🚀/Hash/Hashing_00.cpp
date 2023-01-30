// basic hashing.
// Time Complexity:-
// inside main-> 10^6, & globally -> 10^7.
#include <bits/stdc++.h>
using namespace std;
int hashh[10000000];

int main()
{
    int n;
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    // precompute
    // int hash[13]={0};
    for (int i = 0; i < n; i++)
    {
        hashh[arr[i]] += 1;
    }

    int q;
    cin >> q;

    while (q--)
    {
        int number;
        cin >> number;
        // fetch
        cout << hashh[number] << endl;
    }

    return 0;
}

/*
5
1 3 2 1 3
5
1
4
3
2
13
*/

