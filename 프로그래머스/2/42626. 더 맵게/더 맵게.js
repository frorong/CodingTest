function heapify(arr, idx, length) {
  let smallest = idx;
  const left = 2 * idx + 1;
  const right = 2 * idx + 2;

  if (left < length && arr[left] < arr[smallest]) smallest = left;

  if (right < length && arr[right] < arr[smallest]) smallest = right;

  if (smallest !== idx) {
    [arr[idx], arr[smallest]] = [arr[smallest], arr[idx]];
    heapify(arr, smallest, length);
  }
}

function buildMinHeap(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) heapify(arr, i, len);
}

function push(arr, value) {
  arr.push(value);
  let currentIndex = arr.length - 1;
  let parentIndex = Math.floor((currentIndex - 1) / 2);

  while (currentIndex > 0 && arr[currentIndex] < arr[parentIndex]) {
    [arr[currentIndex], arr[parentIndex]] = [arr[parentIndex], arr[currentIndex]];
    currentIndex = parentIndex;
    parentIndex = Math.floor((currentIndex - 1) / 2);
  }
}

function pop(arr) {
  if (arr.length === 0) return null;

  const minValue = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  heapify(arr, 0, arr.length);
  return minValue;
}

function solution(scoville, K) {
  let answer = 0;
  buildMinHeap(scoville);

  while (scoville[0] < K) {
    if (scoville.length === 1) return -1;

    const n1 = pop(scoville);
    const n2 = pop(scoville);

    const mixed = n1 + 2 * n2;
    push(scoville, mixed);
    answer++;
  }

  return answer;
}
