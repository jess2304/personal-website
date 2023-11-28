// Typewriters for the professional section

function typeWriter(element, segments, segmentIndex, charIndex, callback) {
    if (segmentIndex < segments.length) {
        if (charIndex < segments[segmentIndex].length) {
            element.innerHTML += segments[segmentIndex].charAt(charIndex);
            setTimeout(function() {
                typeWriter(element, segments, segmentIndex, charIndex + 1, callback);
            }, 30);
        } else {
            if (segmentIndex < segments.length - 1) {
                element.innerHTML += '<br>';
            }
            setTimeout(function() {
                typeWriter(element, segments, segmentIndex + 1, 0, callback);
            }, 100);
        }
    } else if (typeof callback == 'function') {
        callback();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('typewriter');
    var text = element.innerHTML;
    var segments = text.split('<br>'); 
    element.innerHTML = ''; 
    typeWriter(element, segments, 0, 0, function() {
    });
});


