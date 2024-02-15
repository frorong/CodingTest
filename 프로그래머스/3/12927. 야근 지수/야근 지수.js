function heapify(arr, idx, length) {
    let largest = idx;
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;

    if (left < length && arr[left] > arr[largest]) largest = left;

    if (right < length && arr[right] > arr[largest]) largest = right;

    if (largest !== idx) {
        [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
        heapify(arr, largest, length);
    }
}

function buildMaxHeap(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) heapify(arr, i, len);
}

function solution(n, works) {
    var answer = 0;

    buildMaxHeap(works);
    
    while (n > 0) {
        if (works[0] > 0) {
            works[0]--;
            n--;
            heapify(works, 0, works.length);
            continue;
        }
        break;
    }

    works.forEach((v) => answer += v ** 2);

    return answer;
}
