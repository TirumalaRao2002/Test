document.querySelectorAll('.delete-btn').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.target.parentElement.remove();
        event.stopPropagation(); // prevent the event from bubbling up to container
    });
});

document.querySelector('.container').addEventListener('click', function(event) {
    console.log('Container Clicked!');
}, true); // Capturing phase
