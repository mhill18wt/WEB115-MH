    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
      let inputForm = document.forms.myForm;

      let inputField = inputForm.elements.inputField;

      let inputVal = inputField.value;

      

      function checkAlphanumeric(inputVal) {

        let regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);

        if (regex.test(inputVal) == true) {
          inputField.setCustomValidity("Data is valid.");
          return true;
        } else if (regex.test(inputVal) == false) { 
          inputField.setCustomValidity("Input value must be alphanumeric.");
          return false;
        }
      };

      inputField.addEventListener("click", checkAlphanumeric);


      

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message