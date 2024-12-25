// content.js
function removeSkibidiVideos() {
    // Get all video titles
    const videos = document.querySelectorAll('style-scope ytd-two-column-search-results-renderer');

    videos.forEach(video => {
        const titleElement = video.querySelector('#video-title');
        if (titleElement && titleElement.textContent.includes('skibidi')) {
            // If the title contains "skibidi", remove the video
            video.style.display = 'none';
        }
    });
}

// Run the function when the page is loaded or updated
window.addEventListener('load', removeSkibidiVideos);

// Observe changes in the page (for infinite scrolling)
const observer = new MutationObserver(removeSkibidiVideos);
observer.observe(document.body, { childList: true, subtree: true });
