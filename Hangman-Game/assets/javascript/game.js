

keyListener = new Object();
keyListener.onKeyDown = function() {
  x = Key.getAscii();
//type what u want to do here
};
Key.addListener(keyListener);

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        alert('hi.');
    }
})