// Coloring the Blocks
// Hackerrank

//  There are n blocks placed in a row. Each block must be colored using one of the three colors available, but no side-by-side blocks can be the same color. The cost of coloring each block varies and is given in an array. Given the cost of using each color on each block, determine the minimum cost to color all of the blocks.

// Example:
// cost = [[1, 2, 3], 
        // [1, 2, 3], 
        // [3, 3, 1]]

// For the first block, the cheapest color is the first color, which costs 1. For the second block, colors cost the same but color 1 cannot be used because it matches the first block. Instead, choose color 2. For the third block, it can be color 1 or color 3. The cheaper is color 3 at 1 unit, therefore color 3 should be used. The total cost to color the blocks is 1 + 2 + 1 = 4.

//  Complete the function minCost in the editor below. The function must return an integer that denotes the minimum cost to color all of the blocks.

// parameters:
// int cost[n][3]: a 2-dimensional array of integers where cost[i][j] denotes the cost of using the jth color on the ith block.

/*
 * Complete the 'minCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY cost as parameter.
 */

// planning notes: 
    // build 3 graphs, each starting with a different color from the first block array
    // orrrrr instead, start with a root node of cost 0
    // or wait... we kind of have the graph already right? the nodes in the path just can't be adjacent to the same color
    // so we find the prev color visited, and visit nodes that do not have that color

    // traverse graph

    // sum values in each path and find the lowest cost
        // could do this while traversing too, to reduce space complexity
        // so when we reach a leaf node, calc weight and compare to a saved minimum weight

// this solution works, but takes too long for larger cost arrays

function minCost(cost) {

    console.log(cost);
    // save number of blocks
    const n = cost.length;

    // create empty queue
    const q = new Queue();
    // add an empty path to queue
    // path will be populated with arrays: [cost, color]
    q.enqueue([]);
    // keep track of minimum cost
    let minimumCost = Infinity;

    // while the queue is not empty...
    while (q.size > 0) {
        // dequeue path
        const path = q.dequeue();
        // check if path (excluding 0 placeholder) is equal to number of blocks
        if (path.length === n) {
            // if so, sum costs to calc total cost
            const totalCost = path.reduce((acc, cur) => acc + cur[0], 0)

            // compare total cost to minimum cost
            if (totalCost < minimumCost) {
                // if less, reassign minimum cost
                minimumCost = totalCost;
            }
        }

        // length of path is same as current block
        const currentBlock = path.length;

        // find previous color visited
        if (currentBlock > 0) {
            var prevColor = path[path.length - 1][1];
        }
        
        // if current block less than number of blocks...
        if (currentBlock < n) {
            // for each color in current block...
            // index represents color
            for (let i = 0; i < 3; i++) {
                // if color is not equal to the previous color visited,
                if (i !== prevColor) {
                    // add path to current block at color to queue
                    const newPath = path.concat([[cost[currentBlock][i], i]]);
                    q.enqueue(newPath);
                }
            }
        }        
    }

    return minimumCost;
}

// queue for bft
class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (this.size > 0) {
            return this.queue.shift();
        } else {
            return null
        }
    }

    get size() {
        return this.queue.length;
    }
}


const test = [ [ 12, 67, 10 ],
  [ 33, 79, 49 ],
  [ 79, 21, 67 ],
  [ 72, 93, 36 ],
  [ 85, 45, 28 ],
  [ 91, 94, 57 ],
  [ 1, 53, 8 ],
  [ 44, 68, 90 ],
  [ 24, 96, 30 ],
  [ 3, 22, 66 ],
  [ 49, 24, 1 ],
  [ 53, 77, 8 ],
  [ 28, 33, 98 ],
  [ 81, 35, 13 ],
  [ 65, 14, 63 ],
  [ 36, 25, 69 ] ]


  const test2 = [ [ 55, 85, 34 ],
  [ 75, 21, 51 ],
  [ 26, 51, 59 ],
  [ 83, 14, 37 ],
  [ 79, 98, 0 ],
  [ 37, 85, 78 ],
  [ 84, 42, 15 ],
  [ 60, 67, 40 ],
  [ 7, 66, 28 ],
  [ 62, 63, 69 ],
  [ 90, 23, 78 ],
  [ 13, 61, 10 ],
  [ 40, 78, 0 ],
  [ 94, 7, 56 ],
  [ 51, 86, 31 ],
  [ 44, 39, 76 ],
  [ 84, 52, 8 ],
  [ 14, 54, 19 ],
  [ 28, 71, 70 ],
  [ 63, 47, 24 ],
  [ 43, 54, 8 ],
  [ 81, 52, 88 ],
  [ 63, 59, 19 ],
  [ 79, 56, 61 ],
  [ 87, 53, 99 ],
  [ 88, 44, 80 ],
  [ 66, 83, 74 ],
  [ 36, 9, 67 ],
  [ 34, 39, 84 ],
  [ 51, 49, 66 ],
  [ 67, 10, 89 ],
  [ 27, 73, 81 ],
  [ 95, 36, 74 ],
  [ 35, 31, 72 ],
  [ 28, 98, 70 ],
  [ 87, 97, 89 ],
  [ 46, 90, 11 ],
  [ 12, 63, 12 ],
  [ 81, 51, 30 ],
  [ 21, 13, 28 ],
  [ 50, 0, 59 ],
  [ 54, 92, 94 ],
  [ 30, 32, 59 ],
  [ 77, 79, 32 ],
  [ 72, 83, 81 ],
  [ 53, 22, 21 ],
  [ 56, 18, 91 ],
  [ 0, 96, 20 ],
  [ 4, 99, 29 ],
  [ 44, 75, 70 ],
  [ 16, 99, 80 ],
  [ 18, 88, 52 ],
  [ 28, 0, 62 ],
  [ 40, 49, 85 ],
  [ 83, 15, 59 ],
  [ 78, 59, 61 ],
  [ 82, 48, 54 ],
  [ 40, 81, 70 ],
  [ 28, 51, 44 ],
  [ 69, 95, 69 ],
  [ 10, 72, 23 ],
  [ 25, 19, 50 ],
  [ 31, 43, 46 ],
  [ 69, 70, 94 ],
  [ 10, 92, 64 ],
  [ 24, 61, 19 ],
  [ 20, 62, 61 ],
  [ 25, 34, 49 ],
  [ 90, 22, 60 ],
  [ 93, 28, 22 ],
  [ 81, 66, 68 ],
  [ 23, 22, 39 ],
  [ 17, 93, 64 ],
  [ 78, 56, 71 ],
  [ 41, 55, 36 ],
  [ 89, 28, 20 ],
  [ 2, 12, 16 ],
  [ 47, 46, 51 ],
  [ 72, 11, 23 ],
  [ 36, 5, 7 ],
  [ 33, 66, 53 ],
  [ 12, 25, 40 ],
  [ 53, 57, 33 ],
  [ 95, 39, 51 ],
  [ 58, 94, 60 ],
  [ 38, 29, 75 ],
  [ 98, 92, 33 ],
  [ 62, 76, 36 ],
  [ 46, 73, 64 ],
  [ 84, 92, 19 ],
  [ 42, 28, 59 ],
  [ 62, 45, 16 ],
  [ 27, 72, 48 ],
  [ 0, 70, 98 ],
  [ 92, 45, 28 ],
  [ 0, 43, 92 ],
  [ 63, 83, 72 ],
  [ 1, 9, 21 ],
  [ 86, 13, 69 ],
  [ 31, 57, 19 ] ]
