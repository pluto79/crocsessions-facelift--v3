const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Function to open the popup and display the clicked image
function openPopup(imgId) {
    const imgElement = document.getElementById(imgId);
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    
    // Set the image source for the popup
    popupImg.src = imgElement.src;
  
    // Display the popup
    popup.style.display = 'flex';
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  