document.addEventListener('DOMContentLoaded', function() {
    const bookingForms = document.querySelectorAll('.booking-form');
    
    bookingForms.forEach(form => {
        const submitButton = form.querySelector('button[type="submit"]');
        const privacyCheckbox = form.querySelector('input[type="checkbox"][name="privacy_policy"]');
        const formMessage = form.nextElementSibling;
        
        // Initial validation on page load
        if (privacyCheckbox && submitButton) {
            validatePrivacyConsent();
        }
        
        // Validate consent checkbox on change
        if (privacyCheckbox) {
            privacyCheckbox.addEventListener('change', validatePrivacyConsent);
        }
        
        // Function to validate privacy consent
        function validatePrivacyConsent() {
            if (privacyCheckbox.required && !privacyCheckbox.checked) {
                submitButton.disabled = true;
                submitButton.classList.add('disabled');
            } else {
                submitButton.disabled = false;
                submitButton.classList.remove('disabled');
            }
        }
        
        // Form submission handler
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Double-check privacy consent before submission
            if (privacyCheckbox && privacyCheckbox.required && !privacyCheckbox.checked) {
                formMessage.textContent = 'Please agree to the privacy policy before submitting.';
                formMessage.className = 'form-message error';
                formMessage.style.visibility = 'visible';
                return;
            }
            
            // Disable submit button while processing
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Get form data
            const formData = {};
            const formElements = form.elements;
            
            for (let i = 0; i < formElements.length; i++) {
                const field = formElements[i];
                if (field.name && field.name !== 'website_url') {
                    formData[field.name] = field.value;
                    if (field.type === 'checkbox') {
                        formData[field.name] = field.checked;
                    }
                }
            }
            
            // Check honeypot field to prevent spam
            const honeypotField = form.querySelector('input[name="website_url"]');
            if (honeypotField && honeypotField.value) {
                // Silently exit if honeypot is filled (likely spam)
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
                return;
            }
            
            // Send data to the server
            fetch('/wp-json/hostinger/v1/booking-submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                // Handle successful submission
                formMessage.textContent = 'Thank you! Your booking has been submitted successfully.';
                formMessage.className = 'form-message success';
                formMessage.style.visibility = 'visible';
                
                // Reset form
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
            })
            .catch(error => {
                // Handle error
                formMessage.textContent = 'There was an error submitting your booking. Please try again.';
                formMessage.className = 'form-message error';
                formMessage.style.visibility = 'visible';
                
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
                console.error('Error:', error);
            });
        });
    });
});