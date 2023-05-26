//Md Jabed Hoseen
//ID: 213902046
#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int gridSize;
    cout << "Please enter grid dimension for added grid: ";
    cin >> gridSize;

    vector<vector<int>> grid(gridSize, vector<int>(gridSize));

    cout << "Please enter the grid values: " << endl;
    for (int i = 0; i < gridSize; i++) {
        for (int j = 0; j < gridSize; j++) {
            cin >> grid[i][j];
        }
    }

    vector<vector<int>> maxSum(gridSize, vector<int>(gridSize));
    vector<vector<int>> minSum(gridSize, vector<int>(gridSize));

    for (int j = 0; j < gridSize; j++) {
        maxSum[0][j] = grid[0][j];
        minSum[0][j] = grid[0][j];
    }

    for (int i = 1; i < gridSize; i++) {
        for (int j = 0; j < gridSize; j++) {
            int leftMax = (j == 0) ? INT_MIN : maxSum[i-1][j-1];
            int middleMax = maxSum[i-1][j];
            int rightMax = (j == gridSize-1) ? INT_MIN : maxSum[i-1][j+1];

            maxSum[i][j] = grid[i][j] + max({leftMax, middleMax, rightMax});

            int leftMin = (j == 0) ? INT_MAX : minSum[i-1][j-1];
            int middleMin = minSum[i-1][j];
            int rightMin = (j == gridSize-1) ? INT_MAX : minSum[i-1][j+1];

            minSum[i][j] = grid[i][j] + min({leftMin, middleMin, rightMin});
        }
    }

    int highestTotal = *max_element(maxSum[gridSize-1].begin(), maxSum[gridSize-1].end());
    int lowestTotal = *min_element(minSum[gridSize-1].begin(), minSum[gridSize-1].end());

    cout << "The highest total is: " << highestTotal << endl;
    cout << "The lowest total is: " << lowestTotal << endl;

    return 0;
}


// 6
// 1 5 1 5 1 5
// 3 3 2 3 3 4
// 2 3 4 4 3 2 
// 2 2 3 2 2 4 
// 2 2 4 3 4 2
// 4 4 4 4 2 3


// 5
// 5 1 5 1 5
// 3 2 3 3 4
// 3 4 4 3 2 
// 2 3 2 2 4 
// 2 4 3 4 2
// 4 4 4 2 3
