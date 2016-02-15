
// http://www.codewars.com/kata/return-a-sorted-list-of-objects/javascript

function sortList (sortBy, list) {
  return list.sort(function(a, b) { return b[sortBy] - a[sortBy]; });
}