//Md Jabed Hoseen
//ID: 213902046
#include <bits/stdc++.h>
using namespace std;

int sum1 = 0, sum2 = 0; // variables to store diagonal sums
int rowSum = 0, columnSum = 0; // variables to store row and column sums

const int MAX_SIZE = 50; // maximum size for matrix

int matrix[MAX_SIZE][MAX_SIZE]; // the matrix
int n, m; // matrix dimensions

// function to check if the matrix is a Lo Shu magic square
bool isMagicSquare(int matrix[][MAX_SIZE], int n, int m) {
    // calculate diagonal sums
    for (int i = 0; i < n; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][n - 1 - i];
    }

    // if diagonal sums are not equal, matrix is not magic square
    if (sum1 != sum2) {
        return false;
    }

    // check row sums
    for (int i = 0; i < n; i++) {
        rowSum = 0;
        for (int j = 0; j < m; j++) {
            rowSum += matrix[i][j];
        }
        // if row sum is not equal to diagonal sum, matrix is not magic square
        if (rowSum != sum1) {
            return false;
        }
    }

    // check column sums
    for (int i = 0; i < n; i++) {
        columnSum = 0;
        for (int j = 0; j < n; j++) {
            columnSum += matrix[j][i];
        }
        // if column sum is not equal to diagonal sum, matrix is not magic square
        if (columnSum != sum1) {
            return false;
        }
    }

    // if all checks pass, matrix is magic square
    return true;
}

int main() {
    cout << "Enter the number of rows and columns of the matrix : ";
    cin >> n >> m;

    if (n != m) {
        cout << "Invalid input: matrix must be square." << endl;
        exit(0); // exit the program
    }

    cout << "Please input the elements of the matrix: " << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> matrix[i][j];
        }
    }

    // check if matrix is Lo Shu magic square
    if (isMagicSquare(matrix, n, m)) {
        cout << "This is a Lo Shu Magic Square";
        //show the magic number 
        cout << " And, The Magic number is: " << sum1 << endl;

    }
    else {
        cout << "Sorry, it's not a Lo Shu magic square." << endl;
    }

    return 0;
}





//magic
// 3 * 3 
// 2 7 6
// 9 5 1
// 4 3 8


//magic 4*4
// 16 3 2 13
// 5 10 11 8
// 9 6 7 12
// 4 15 14 1

