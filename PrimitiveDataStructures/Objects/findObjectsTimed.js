/*
  (MEDIUM)
  You have three minutes for this problem! Make sure you time yourself accurately, and read over the problem before you begin.
  In three minutes, you need to make the code at the bottom work!
*/

const test = [{ a: 1, b: [{ a: 0, b: 2 }, { a: ["kings"] }]}, { a: 0, b: { 0: [1, 0]}}, true, [{ a: true, 1: [1, 0, { a: "angels" }]}, { b: 0, a: { 1: [{ a: true }]}}], { a: 1, b: [{ a: 0, b: "lions" }, { a: [0] }]}, { a: 0, b: { 0: [1, "unicorns"]}}, true, [{ a: true, 1: [1, 0, { a: "demons" }]}, { b: 0, a: { 1: [{ a: true }]}}]];


const kings = test[0]['b'][1]['a'][0];
const lions = test[4][0]['b'];
const unicorns = test[5]['b']['0'][1];
const angels = test[3][0]['1'][2]['a'];
const demons = test[7][0]['1'][2]['a'];
console.log('We found them all! -', kings, lions, unicorns, angels, demons); // Will print "undefined undefined undefined ..." unless you update the variables above properly!

// Best time record: 2:55 