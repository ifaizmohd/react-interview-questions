/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * @param {*} intervals 
 */

export function merge(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]]; // [[1,3]]
  for (let i = 1; i < intervals.length; i++) {
    let prev = res[res.length - 1]; // [1,3]
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}

export function mergeIntervals(intervals) {
  if (!intervals.length) return -1;
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 0; i < intervals.length; i += 1) {
    let prev = res[res.length - 1];
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][0]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}
