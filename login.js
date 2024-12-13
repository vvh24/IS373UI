document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signInBtn = document.querySelector('.signin-btn');
  
    // Create a feedback message element
    const feedbackMessage = document.createElement('p');
    feedbackMessage.style.color = 'red';
    feedbackMessage.style.marginTop = '10px';
    feedbackMessage.style.display = 'none';
    form.appendChild(feedbackMessage);
  
    // Predefined credentials for demonstration purposes
    const validEmail = 'user@innovaai.com';
    const validPassword = 'password123';
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting normally
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Simple validation
      if (!validateEmail(email)) {
        showFeedback('Please enter a valid email address.');
        return;
      }
  
      if (password.length < 6) {
        showFeedback('Password must be at least 6 characters long.');
        return;
      }
  
      // Simulate authentication
      if (email === validEmail && password === validPassword) {
        showSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = 'dashboard.html'; // Redirect to a dashboard or homepage
        }, 1500);
      } else {
        showFeedback('Incorrect email or password. Please try again.');
      }
    });
  
    // Function to display error feedback
    function showFeedback(message) {
      feedbackMessage.textContent = message;
      feedbackMessage.style.display = 'block';
      feedbackMessage.style.color = 'red';
    }
  
    // Function to display success feedback
    function showSuccess(message) {
      feedbackMessage.textContent = message;
      feedbackMessage.style.display = 'block';
      feedbackMessage.style.color = 'green';
    }
  
    // Function to validate email format
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  