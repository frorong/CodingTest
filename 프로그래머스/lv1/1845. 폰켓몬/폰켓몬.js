function solution(nums) {
    const newNums = Array.from(new Set(nums));
    return newNums.length > nums.length / 2 ? nums.length / 2 : newNums.length;
}