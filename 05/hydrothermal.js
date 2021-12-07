/*
You come across a field of hydrothermal vents on the ocean floor! These vents constantly produce large, opaque clouds, so it would be best to avoid them if possible.

They tend to form in lines; the submarine helpfully produces a list of nearby lines of vents (your puzzle input) for you to review. For example:

0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
Each line of vents is given as a line segment in the format x1,y1 -> x2,y2 where x1,y1 are the coordinates of one end the line segment and x2,y2 are the coordinates of the other end. These line segments include the points at both ends. In other words:

An entry like 1,1 -> 1,3 covers points 1,1, 1,2, and 1,3.
An entry like 9,7 -> 7,7 covers points 9,7, 8,7, and 7,7.
For now, only consider horizontal and vertical lines: lines where either x1 = x2 or y1 = y2.

So, the horizontal and vertical lines from the above list would produce the following diagram:

.......1..
..1....1..
..1....1..
.......1..
.112111211
..........
..........
..........
..........
222111....
In this diagram, the top left corner is 0,0 and the bottom right corner is 9,9. Each position is shown as the number of lines which cover that point or . if no line covers that point. The top-left pair of 1s, for example, comes from 2,2 -> 2,1; the very bottom row is formed by the overlapping lines 0,9 -> 5,9 and 0,9 -> 2,9.

To avoid the most dangerous areas, you need to determine the number of points where at least two lines overlap. In the above example, this is anywhere in the diagram with a 2 or larger - a total of 5 points.

Consider only horizontal and vertical lines. At how many points do at least two lines overlap?

*/

var fs = require('fs');
//array or arrays or coord arrays
let sampleData1 = fs.readFileSync('./sample-input.txt').toString('utf-8').split('\n').map(coords => coords.replace(/\s/g, '').split('->').map(coord => coord.split(',')));

let sampleData2 = fs.readFileSync('./sample-input.txt').toString('utf-8').split('\n').map(coords => coords.replace(/\s/g,'').replace(/->/g, ',').split(','))

console.log(sampleData2)

class Coord{
  constructor(x1,y1,x2,y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  isStraightLine(){
    return this.x1 === this.x2 || this.y1 === this.y2
  }
  getCoords() {

  }
}
  //coord class
  //stores same val
  //stores two differing values
  //coords covered array

  //method to calculate coord object??

const findHydroThermalVents = (coords) => {
  let test = coords.map(coord => {

    let toNumbers = coord.map(num => Number(num));
    const [x1,y1,x2,y2] = toNumbers;

    return new Coord(x1,y1,x2,y2)

  })
  // const isStraightLine = (coords) => {
  //   //shoudl be array of array of coords
  //   if(coords[0][0] === coords[1][0] || coords[0][1] === coords[1][1]) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
console.log(test)
  //iterate over coords
    //if straight line
      //find differing coord
      //at each index
      //create coord to push to push to obj
      //if


}
findHydroThermalVents(sampleData2)
//console.log(sampleData)