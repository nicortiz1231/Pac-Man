let pos = pageWidth / 2; // Set the initial horizontal position to the center of the screen
let pageWidth = window.innerWidth;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
let direction = 0;
let focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 10; // Reduce the distance to make Pac-Man move faster
    img.style.left = pos + "px";
  } else {
    pos += 10; // Reduce the distance to make Pac-Man move faster
    img.style.left = pos + "px";
  }
}
setInterval(Run, 300); // Adjust the interval for movement (e.g., 300 milliseconds)

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos < 0) {
      direction = 1;
      pos = 0;
  } else if (direction == 1 && pos + imgWidth >= pageWidth) {
      direction = 0;
      pos = pageWidth - imgWidth;
  }
  return direction;
}


setInterval(() => {
  focus = (focus + 1) % 2;
}, 100); // Adjust the interval for mouth opening and closing (e.g., 100 milliseconds)


module.exports = checkPageBounds;