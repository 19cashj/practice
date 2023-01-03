/*

You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

 Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

function isValidWalk(walk) {
  if (walk.length != 10) {
    // If a walk is not exactly 10 minutes, the walk is invalid
    return false;
  }
  let movements = {
    // Tracking movements (distance from start) (should all be 0 at end)
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };
  let reverseMovements = {
    // The opposite movements (If moving North, you would add one North movement and delete a South movement etc.)
    n: "s",
    s: "n",
    e: "w",
    w: "e",
  };
  walk.forEach((e, i) => {
    // Every movements adds a minute, a movement to the specified direction, and deletes a opposite movement
    movements[e]++;
    movements[reverseMovements[e]]--;
  });
  for (key in movements) {
    // If we are not back at the start (all zeros in movements), the walk is invalid
    if (!movements[key] == 0) {
      return false;
    }
  }
  return true; // If passed checks, the walk is valid
}
