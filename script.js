// Change text content when button is clicked
document.getElementById('changeTextButton').addEventListener('click', function() {
    const paragraph = document.getElementById('paragraph');
    paragraph.textContent = "The text has been changed dynamically!";
  });
  
  // Modify CSS styles when button is clicked
  document.getElementById('changeStyleButton').addEventListener('click', function() {
    const styledParagraph = document.getElementById('styledParagraph');
    styledParagraph.style.color = "blue"; // Change text color to blue
    styledParagraph.style.fontWeight = "bold"; // Make text bold
  });
  
  // Add or remove an element dynamically
  document.getElementById('addElementButton').addEventListener('click', function() {
    const container = document.getElementById('dynamicElementContainer');
    const newElement = document.createElement('p');
    newElement.textContent = "This is a dynamically added paragraph!";
    container.appendChild(newElement); // Append the new element to the container
  });
  
  document.getElementById('removeElementButton').addEventListener('click', function() {
    const container = document.getElementById('dynamicElementContainer');
    const lastElement = container.querySelector('p');
    if (lastElement) {
      container.removeChild(lastElement); // Remove the last <p> element added
    }
  });
  