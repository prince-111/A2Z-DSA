// basic hashing by map.
// Time Complexity:-

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    // pre compute
    unordered_map<int, int>mpp;
    // map<int, int> mpp;
    for (int i = 0; i < n; i++)
    {
        mpp[arr[i]]++;
    }

    int q;
    cin >> q;

    while (q--)
    {
        int number;
        cin >> number;
        // fetch
        cout << mpp[number] << endl;
    }
    return 0;
}

/*
7
1 2 3 1 3 2 12
5
1
2
3
4
12
*/