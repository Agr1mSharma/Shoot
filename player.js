document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.play().catch(e => console.log('Auto-play failed:', e));
  });