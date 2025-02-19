let designation = "Full stack developer";

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// Function to simulate typing effect
function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    let element = document.getElementById(elementId);

    // Clear any existing content in the element
    element.innerHTML = "";

    // Function to add characters one by one
    function typeCharacter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        } else {
            // After typing is complete, call the callback to restart the effect
            setTimeout(callback, 1000); // Wait 1 second before restarting
        }
    }

    // Start typing the text
    typeCharacter();
}

// Function to repeat the typing effect
function repeatTypingEffect() {
    let designation = "Full stack developer";
    let typingSpeed = 100; // Speed in milliseconds (lower is faster)
    
    // Start the typing effect
    typeWriter("typingEffect", designation, typingSpeed, repeatTypingEffect);
}

// Start the typing effect when the page loads
repeatTypingEffect();