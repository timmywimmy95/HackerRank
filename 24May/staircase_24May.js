function staircase(hex) {
  // Write your code here
  let hexes = '#';
  let spaces = '*';

  for (let i = 1; i <= hex; i++) {
    console.log(spaces.repeat(hex - i) + hexes.repeat(i));
  }
}

staircase(6);
