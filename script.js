// Initialize WebGazer
webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) return;

  // Get the player and goal elements
  const player = document.getElementById('player');
  const goal = document.getElementById('goal');

  // Move the player based on eye position
  const x = data.x;
  const y = data.y;

  player.style.left = x + 'px';
  player.style.top = y + 'px';

  // Check for collision with the goal
  const playerRect = player.getBoundingClientRect();
  const goalRect = goal.getBoundingClientRect();

  if (
    playerRect.left < goalRect.right &&
    playerRect.right > goalRect.left &&
    playerRect.top < goalRect.bottom &&
    playerRect.bottom > goalRect.top
  ) {
    alert('You Win!');
    webgazer.end();
  }
}).begin();

// Handle window resizing
window.onresize = function() {
  webgazer.params.videoViewerWidth = window.innerWidth;
  webgazer.params.videoViewerHeight = window.innerHeight;
};