window.addEventListener('DOMContentLoaded', (event) => {
    const entryButton = document.getElementById('entrybutton');
    const entryInput = document.getElementById('entryinput');
    const textOutput = document.getElementById('textoutput');
    const yourName = 'Your Name'; // Replace with your actual name

    entryButton.addEventListener('click', function() {
        // c.1 Alert box with the contents of the text field prepended by your name
        alert(yourName + ': ' + entryInput.value);

        // c.2 Change the text of the h2 element to the contents of the text input control
        textOutput.textContent = entryInput.value;
    });
});
