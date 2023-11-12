// document.addEventListener("DOMContentLoaded", function() {
//     // This code will run after the DOM is fully loaded

//     document.querySelector(".bg-color-three-reasons").addEventListener("mousemove", (e) => {
//         const backgroundImage = document.getElementById("background-image");
//         const container = document.querySelector(".bg-color-three-reasons");

//         // Get the mouse position relative to the container
//         const mouseX = e.clientX - container.getBoundingClientRect().left;
//         const mouseY = e.clientY - container.getBoundingClientRect().top;

//         // Calculate the image position based on the mouse position
//         const imageX = (mouseX / container.offsetWidth - 0.5) * 30;
//         const imageY = (mouseY / container.offsetHeight - 0.5) * 30;

//         // Apply the transformation to the background image
//         backgroundImage.style.transform = `translate(${imageX}px, ${imageY}px)`;
//     });

//     document.querySelector(".bg-color-three-reasons").addEventListener("mouseleave", () => {
//         const backgroundImage = document.getElementById("background-image");

//         // Reset the background image's position when the mouse leaves the container
//         backgroundImage.style.transform = "translate(0, 0)";
//     });

//     console.log("mouse moved");
// });
