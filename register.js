document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const feedback = document.getElementById('form-feedback');
    const successMessage = document.getElementById('success-message');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Collect input values
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
  
      // Simple validation
      if (username === '' || password === '' || email === '') {
        feedback.textContent = 'Please fill out all required fields.';
        feedback.style.display = 'block';
        successMessage.style.display = 'none';
        return;
      }
  
      if (password.length < 6) {
        feedback.textContent = 'Password must be at least 6 characters long.';
        feedback.style.display = 'block';
        successMessage.style.display = 'none';
        return;
      }
  
      if (!validateEmail(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.style.display = 'block';
        successMessage.style.display = 'none';
        return;
      }
  
      // If everything is valid
      feedback.style.display = 'none';
      successMessage.style.display = 'block';
  
      // Optionally, you could send the form data to a server here using fetch or AJAX
      console.log('Form submitted:', { username, password, email, phone });
      
      // Clear form fields
      form.reset();
    });
  
    // Email validation function
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  