// Accessing the element with id 'myDiv'
const myDiv = document.getElementById('myDiv');

// Adding event listener to the button
document.getElementById('changeTextBtn').addEventListener('click', function () {
    // Modifying only the <p> inside the div, preserving structure
    console.log("Text changed successfully!");
    myDiv.querySelector("p").textContent = 'DOM manipulation is fun!';
});


