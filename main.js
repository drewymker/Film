const videoPlayer = document.getElementById('videoPlayer');
const videoUpload = document.getElementById('videoUpload');
const playbackRate = document.getElementById('playbackRate');
const tagsList = document.getElementById('tagsList');

// Handle video file upload
videoUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
  }
});

// Handle playback speed changes
playbackRate.addEventListener('change', function () {
  videoPlayer.playbackRate = parseFloat(this.value);
});

// Tag current time
function tagPlay() {
  const currentTime = videoPlayer.currentTime.toFixed(2);
  const tagItem = document.createElement('li');
  tagItem.textContent = `Tagged at ${currentTime} seconds`;
  tagsList.appendChild(tagItem);
}
