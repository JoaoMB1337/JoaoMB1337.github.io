<template>
  <section id="contact" class="container">
    <div class="contact-container">
      <h2 class="section-title" style="justify-content: center;">Get In Touch</h2>
      <p class="contact-text">
        Have a question or want to work together? Feel free to send me a message!
      </p>
      
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <input 
            v-model="formData.name"
            type="text" 
            name="name" 
            class="form-control" 
            placeholder="Name"
            @blur="validateFormField('name')"
          >
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>
        
        <div class="form-group">
          <input 
            v-model="formData.email"
            type="email" 
            name="email" 
            class="form-control" 
            placeholder="Email"
            @blur="validateFormField('email')"
          >
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>
        
        <div class="form-group">
          <input 
            v-model="formData.subject"
            type="text" 
            name="subject" 
            class="form-control" 
            placeholder="Subject"
            @blur="validateFormField('subject')"
          >
          <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
        </div>
        
        <div class="form-group">
          <textarea 
            v-model="formData.message"
            name="message" 
            class="form-control" 
            placeholder="Message"
            @blur="validateFormField('message')"
          ></textarea>
          <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
        </div>
        
        <button type="submit" class="btn-submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
        
        <div v-if="submitMessage" class="submit-message" :class="{ success: submitMessage.includes('successfully') }">
          {{ submitMessage }}
        </div>
      </form>

      <div class="social-links">
        <a href="https://www.linkedin.com/in/joaobarbosa1337/" target="_blank" class="social-icon" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/JoaoMB1337" target="_blank" class="social-icon" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useForm } from '@/composables/useForm'

const {
  formData,
  errors,
  isSubmitting,
  submitMessage,
  validateForm,
  resetForm
} = useForm({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const validateFormField = (field) => {
  if (field === 'name' && !formData.value.name) {
    errors.value.name = 'Name is required'
  } else if (field === 'email' && !formData.value.email) {
    errors.value.email = 'Email is required'
  } else if (field === 'subject' && !formData.value.subject) {
    errors.value.subject = 'Subject is required'
  } else if (field === 'message' && !formData.value.message) {
    errors.value.message = 'Message is required'
  } else {
    delete errors.value[field]
  }
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  
  try {
    const response = await fetch('https://formspree.io/f/mgejqryn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      submitMessage.value = 'Message sent successfully!'
      resetForm()
    } else {
      submitMessage.value = 'Error sending message. Please try again.'
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submitMessage.value = 'Error sending message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: block;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: #e74c3c;
  color: white;
  text-align: center;
}

.submit-message.success {
  background-color: #27ae60;
}
</style>
