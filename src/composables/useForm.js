import { ref } from 'vue'

export function useForm(initialData = {}) {
  const formData = ref({ ...initialData })
  const errors = ref({})
  const isSubmitting = ref(false)
  const submitMessage = ref('')

  const validateForm = () => {
    errors.value = {}
    
    if (!formData.value.name || formData.value.name.trim() === '') {
      errors.value.name = 'Name is required'
    }
    
    if (!formData.value.email || formData.value.email.trim() === '') {
      errors.value.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
      errors.value.email = 'Email is not valid'
    }
    
    if (!formData.value.subject || formData.value.subject.trim() === '') {
      errors.value.subject = 'Subject is required'
    }
    
    if (!formData.value.message || formData.value.message.trim() === '') {
      errors.value.message = 'Message is required'
    }

    return Object.keys(errors.value).length === 0
  }

  const resetForm = () => {
    formData.value = { ...initialData }
    errors.value = {}
    submitMessage.value = ''
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitMessage,
    validateForm,
    resetForm
  }
}
