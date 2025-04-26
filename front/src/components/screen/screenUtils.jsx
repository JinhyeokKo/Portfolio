export async function enterFullscreen() {
    const el = document.documentElement;
    if (el.requestFullscreen) {
        await el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
        await el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
        await el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
        await el.msRequestFullscreen();
    }
}

export async function exitFullscreen() {
    if (document.exitFullscreen) {
        await document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        await document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
    }
}

export function isFullscreen() {
    return !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    );
}