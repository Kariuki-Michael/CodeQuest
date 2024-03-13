addEventListener('DOMContentLoaded', () => {
    //// thumbnail hack
    if (navigator.userAgent.includes('Headless')) {
        document.documentElement.style.setProperty('--speed-fast', '0s');
        document.documentElement.style.setProperty('--speed-medium', '0s');
        document.documentElement.style.setProperty('--speed-slow', '0s');
        document.body.style.setProperty('padding-block-end', '0');
        document.body.style.setProperty('margin-block-start', '152px');
        document.body.style.setProperty('min-block-size', '0');
        document.body.style.setProperty('block-size', 'calc(100vh - 304px)');
        document.body.style.setProperty('position', 'relative');
    }
});