// codesignal

// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]


// where n is number of elements in image matrix...
// Time complexity: O(n)
// Space complexity: O(n) - not ideal

// function rotateImage(a) {
//     const n = a.length;

//     const matrix = [];
//     for (let i = 0; i < n; i++) {
//         matrix.push([]);
//     }

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             matrix[j].unshift(a[i][j])
//         }
//     }

//     return matrix;
// }


// where n is number of elements in image matrix...
// Time complexity: O(n)
// Space complexity: O(i) - better!

function rotateImage(a) {
    const n = a.length;

    a.reverse();

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // swap values
            [a[i][j], a[j][i]] = [a[j][i], a[i][j]]
        }
    }

    return a;
}