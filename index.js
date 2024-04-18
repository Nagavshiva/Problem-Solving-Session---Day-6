// ..............................................problem....................................//

// 1. Implement the bubble sort algorithm.

function bubbleSort(arr) {
    // Store the length of the array
    let n = arr.length;
    
    // Outer loop for iterating through all elements
    for (let i = 0; i < n - 1; i++) {
        
        // Inner loop for comparison and swapping
        for (let j = 0; j < n - i - 1; j++) {
            
            // If the current element is greater than the next one
            if (arr[j] > arr[j + 1]) {
                
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    // Return the sorted array
    return arr;
}

let myArray = [5, 3, 8, 1, 2];
console.log(bubbleSort(myArray)); // Output: [1, 2, 3, 5, 8]


// 2. Implement the selection sort algorithm.

function selectionSort(arr) {
    // Store the length of the array
    let n = arr.length;
    
    // Outer loop for iterating through unsorted part of the array
    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum element is at the current index
        let minIndex = i;
        
        // Inner loop for finding the minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            // If the current element is smaller than the minimum found so far
            if (arr[j] < arr[minIndex]) {
                // Update the index of the minimum element
                minIndex = j;
            }
        }
        
        // Swap the minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    // Return the sorted array
    return arr;
}


let myArrays = [5, 3, 8, 1, 2];
console.log(selectionSort(myArrays)); // Output: [1, 2, 3, 5, 8]


// 3.Implement the insertion sort algorithm.

function insertionSort(arr) {
    // Store the length of the array
    let n = arr.length;
    
    // Traverse through the array, starting from the second element
    for (let i = 1; i < n; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        
        // Start comparing with the elements before the current element
        let j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place the current element at its correct position
        arr[j + 1] = current;
    }
    
    // Return the sorted array
    return arr;
}


let myArrayy = [5, 3, 8, 1, 2];
console.log(insertionSort(myArrayy)); // Output: [1, 2, 3, 5, 8]

// 4. Explain the concept of merge sort and implement it.

// Merge sort is a divide and conquer algorithm used for sorting elements.
// It breaks down the input array into smaller sub-arrays until each sub-array contains only one element, which are inherently sorted.
// It then merges these sorted sub-arrays back together in a sorted manner until the entire array is sorted.
// The key operation in merge sort is the merging step, where two sorted arrays are combined into a single sorted array.

function mergeSort(arr) {
//    if the array has one or zero elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Find the middle index of the array
    const middle = Math.floor(arr.length / 2);
    
    // Divide the array into two halves
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
    
    // Recursively apply mergeSort to the left and right halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
    
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller one into the result array
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Push any remaining elements from the left and right arrays
    while (leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;
}


const myArr = [5, 3, 8, 1, 2];
console.log(mergeSort(myArr)); // Output: [1, 2, 3, 5, 8]


// 5.Explain the concept of quick sort and implement it.

// Quick sort is a divide and conquer algorithm used for sorting elements.
// It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
// The sub-arrays are then recursively sorted.
// Unlike merge sort, quick sort sorts in place, meaning that no additional memory is required.
// The key operation in quick sort is the partitioning step, where elements are rearranged around the pivot.

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, low, high);
        
        // Recursively sort the left and right sub-arrays
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    
    // Return the sorted array
    return arr;
}

function partition(arr, low, high) {
    // Choose the pivot (here, we choose the last element)
    const pivot = arr[high];
    let i = low - 1; // Index of the smaller element
    
    // Partitioning loop
    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to the pivot
        if (arr[j] <= pivot) {
            i++; // Increment index of smaller element
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    // Swap arr[i+1] and arr[high] (or the pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    
    return i + 1;
}


const arr = [5, 3, 8, 1, 2];
console.log(quickSort(arr)); // Output: [1, 2, 3, 5, 8]
