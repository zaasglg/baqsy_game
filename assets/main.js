document.addEventListener('DOMContentLoaded', function() {
    console.log('Atlas Games loaded');
});

// Функция для переключения звука
function toggleMute(videoId) {
    const video = document.getElementById(videoId);
    if (video) {
        video.muted = !video.muted;
        // Можно добавить визуальную индикацию состояния звука
        const button = video.parentElement.querySelector('button[onclick*="toggleMute"]');
        if (video.muted) {
            button.style.opacity = '0.7';
        } else {
            button.style.opacity = '1';
        }
    }
}

// Функция для переключения в полноэкранный режим
function toggleFullscreen(videoId) {
    const video = document.getElementById(videoId);
    if (video) {
        if (!document.fullscreenElement) {
            video.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }
}
