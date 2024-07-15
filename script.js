document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const dobInput = document.getElementById('dob');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const ageInput = document.getElementById('age');
    const addressInput = document.getElementById('address');
    const otpInput = document.getElementById('otp');
    const sendOtpButton = document.getElementById('send-otp');
    const successMessage = document.getElementById('success-message');
    let generatedOtp = '';
  
    function generateOtp() {
      return Math.floor(100000 + Math.random() * 900000).toString();
    }
  
    function sendOtp(email, otp) {
      var params = {
        email: email,
        otp: otp
      };
      emailjs.send("service_o8j1fqh", "template_wxnhn6b", params)
        .then(function (res) {
          alert("OTP sent successfully to " + email);
        }, function (error) {
          alert("Failed to send OTP. Error: " + error);
        });
    }
  
    sendOtpButton.addEventListener('click', function () {
      if (emailInput.value) {
        generatedOtp = generateOtp();
        sendOtp(emailInput.value, generatedOtp);
      } else {
        alert("Please enter a valid email address first.");
      }
    });
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let valid = true;
  
      // Validate name
      if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
        const nameErrorElement = document.getElementById('name-error');
        nameErrorElement.innerHTML = 'Please enter only alphabets for the name';
        nameErrorElement.className = 'error';
        valid = false;
      } else {
        const nameErrorElement = document.getElementById('name-error');
        nameErrorElement.innerHTML = '';
        nameErrorElement.className = '';
      }
  
      // Validate email
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
        const emailErrorElement = document.getElementById('email-error');
        emailErrorElement.innerHTML = 'Please enter a valid email address';
        emailErrorElement.className = 'error';
        valid = false;
      } else {
        const emailErrorElement = document.getElementById('email-error');
        emailErrorElement.innerHTML = '';
        emailErrorElement.className = '';
      }
  
      // Validate phone number
      if (!/^[6-9][0-9]{9}$/.test(phoneInput.value)) {
        const phoneErrorElement = document.getElementById('phone-error');
        phoneErrorElement.innerHTML = 'Please enter a valid phone number';
        phoneErrorElement.className = 'error';
        valid = false;
      } else {
        const phoneErrorElement = document.getElementById('phone-error');
        phoneErrorElement.innerHTML = '';
        phoneErrorElement.className = '';
      }
  
      // Validate age
      if (ageInput.value < 1 || ageInput.value > 150) {
        const ageErrorElement = document.getElementById('age-error');
        ageErrorElement.innerHTML = 'Please enter a valid age (1-150)';
        ageErrorElement.className = 'error';
        valid = false;
      } else {
        const ageErrorElement = document.getElementById('age-error');
        ageErrorElement.innerHTML = '';
        ageErrorElement.className = '';
      }
  
      // Validate address
      if (addressInput.value.trim() === '') {
        const addressErrorElement = document.getElementById('address-error');
        addressErrorElement.innerHTML = 'Please enter a valid address';
        addressErrorElement.className = 'error';
        valid = false;
      } else {
        const addressErrorElement = document.getElementById('address-error');
        addressErrorElement.innerHTML = '';
        addressErrorElement.className = '';
      }
  
      // Validate OTP
      if (otpInput.value !== generatedOtp) {
        const otpErrorElement = document.getElementById('otp-error');
        otpErrorElement.innerHTML = 'Invalid OTP';
        otpErrorElement.className = 'error';
        valid = false;
      } else {
        const otpErrorElement = document.getElementById('otp-error');
        otpErrorElement.innerHTML = '';
        otpErrorElement.className = '';
      }
  
      // If all fields are valid, display success message
      if (valid) {
        alert("Registration Successful!!");
      }
    });
  });