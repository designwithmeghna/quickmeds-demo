/******  Helper functions for feature 2 ******/

const formDataMap = {
  name: {
    value: "",
    isValid: false,
    isEmpty: true,
  },
  email: {
    value: "",
    isValid: false,
    isEmpty: true,
  },
  message: {
    value: "",
    isValid: false,
    isEmpty: true,
  },
};

// Utility function to validate email via regular expression check
const validateEmailByRegex = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

// validation handler for email
const validateEmailField = () => {
  const value = document.getElementById("email").value;
  const fieldData = formDataMap.email;

  if (!value || value.trim() === "") {
    fieldData.isEmpty = true;
    fieldData.isValid = false;
    fieldData.value = "";
  } else if (!validateEmailByRegex(value)) {
    fieldData.isEmpty = false;
    fieldData.isValid = false;
    fieldData.value = value;
  } else {
    fieldData.isEmpty = false;
    fieldData.isValid = true;
    fieldData.value = value;
  }
};

// validation handler for text fields
const validateTextField = (fieldName, minLength) => {
  // Get the current value of the text field by its ID
  const value = document.getElementById(fieldName).value;

  // Retrieve the corresponding data object from formDataMap (user enetered)
  const fieldData = formDataMap[fieldName];

  // Check if the input is empty or only contains whitespace
  if (!value || value.trim() === "") {
    fieldData.isEmpty = true;
    fieldData.isValid = false;
    fieldData.value = "";
  } else if (value.length < minLength) {
    fieldData.isEmpty = false;
    fieldData.isValid = false;
    fieldData.value = value;
  } else {
    fieldData.isEmpty = false;
    fieldData.isValid = true;
    fieldData.value = value;
  }
};

// handling form submission
const handleFormSubmission = () => {
  
  // Validate fields
  validateTextField("name", 3); // Name: At least 3 characters
  validateEmailField(); // Email: Valid format
  validateTextField("message", 5); // Message: At least 5 characters
  
  // Retrieve form data from formDataMap
  const name = formDataMap.name;
  const email = formDataMap.email;
  const message = formDataMap.message;
  
  // Check for validation errors
  if (name.isEmpty) {
    alert("Please enter your name.");
    return;
  }
  if (!name.isValid) {
    alert("Your name must be at least 3 characters long.");
    return;
  }
  if (email.isEmpty) {
    alert("Please enter your email address.");
    return;
  }
  if (!email.isValid) {
    alert("Please enter a valid email address.");
    return;
  }
  if (message.isEmpty) {
    alert("Please enter a message.");
    return;
  }
  if (!message.isValid) {
    alert("Your message must be at least 5 characters long.");
    return;
  }

  // If all validations pass, proceed
  alert("Thank you for your submission!");
  console.log("Form Submitted:", {
    email: email.value,
    name: name.value,
    message: message.value,
  });

  // Reset form
  document.getElementById("contact-us-form").reset();

  // Clear the formDataMap
  formDataMap.email = { value: "", isValid: false, isEmpty: true };
  formDataMap.name = { value: "", isValid: false, isEmpty: true };
  formDataMap.message = { value: "", isValid: false, isEmpty: true };
};

/** Feature code here **/

// Feature 1
// Open/Close overlay Navigation Menu
function openNav() {
  // Toggle the width of the navigation menu
  document.getElementById("myNav").classList.toggle("menu_width");

  // Toggle the style of the menu button
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// Feature 2
// Add event listner to the Contact form
(() => {
  const form = document.getElementById("contact-us-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      handleFormSubmission();
    });
  }
})();

// Feature 3
// Carausel Functionality from bootstrap/jquery library

// Feature 4
// adding google map's iframe
(() => {
  let mapIframe = `
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.58741448872!2d-79.9046208876491!3d43.531795760153116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6f4810934363%3A0x5b97f97d97a9fef4!2sConestoga%20College-%20Milton%20campus!5e0!3m2!1sen!2sca!4v1732400252959!5m2!1sen!2sca" 
                width="600" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `;
  setTimeout(() => {
    document.getElementById("googleMap").innerHTML = mapIframe;
  }, 16);
})();

// Feature 5
// Set current year in footer
(() => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  document.getElementById("displayYear").innerHTML = currentYear;
})();

// ********* Bonus Feature ***********
// Set current Date and Time in footer
(() => {
  setInterval(() => {
    let currentDate = new Date();
    document.getElementById("currentDate").innerHTML = currentDate;
  }, 1000);
})();


/* toggle mobile hero image */
(() => {
  
  const myHeroImageContainer = document.getElementById(
    "my-hero-image-container"
  );
  if (screen.width < 767) {
    myHeroImageContainer.innerHTML = "";
  }
})();
