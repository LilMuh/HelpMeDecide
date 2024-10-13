Page({
  data: {
    input1: '',         // Store the first input value
    input2: '',         // Store the second input value
    result: '',         // Store only the result
    buttonText: 'Decide',  // Button text starts as 'Decide'
    buttonClass: 'decide-btn'  // Default button class
  },

  // Bind input1 to the data
  bindInput1: function(e) {
    this.setData({
      input1: e.detail.value
    });
  },

  // Bind input2 to the data
  bindInput2: function(e) {
    this.setData({
      input2: e.detail.value
    });
  },

  // Function for deciding and handling "Try Again"
  decide: function () {
    if (this.data.buttonText === 'Decide') {
      // Decision logic
      const option1 = this.data.input1;
      const option2 = this.data.input2;
      
      // Ensure both inputs have values
      if (option1 && option2) {
        const result = Math.random() < 0.5 ? option1 : option2;
        this.setData({
          result: result,            // Store only the result
          buttonText: 'Try Again',   // Change the button text after result
          buttonClass: 'try-again-btn'  // Change button class for gray styling
        });
      } else {
        this.setData({
          result: '',  // Clear result
          resultMessage: 'Please enter both options.'
        });
      }
    } else {
      // If button says 'Try Again', clear the inputs and reset
      this.setData({
        input1: '',
        input2: '',
        result: '',          // Clear result
        buttonText: 'Decide', // Reset the button text
        buttonClass: 'decide-btn'  // Reset button class to original
      });
    }
  }
});
