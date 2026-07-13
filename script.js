confetti();
confetti({
    position: { x: 0, y: 0 },	
    count: 100,			
    size: 1,			
    velocity: 200,		
    fade: false			
});
function goTo(url) {
    document.getElementById('successOverlay').classList.add('active');
    setTimeout(() => {
        window.location.href = url;
    }, 2000);
}