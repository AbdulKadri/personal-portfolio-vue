<template>
  <div class="contact-container">
    <div class="contact-form">
      <h1>Contact Form</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="form.name" type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            v-model="form.message"
            id="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>

    <div>
      <h1>Socials</h1>
      <div class="socials">
        <a href="https://github.com/AbdulKadri" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.linkedin.com/in/abdul-rahime-kadri-bb8935178/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useToast, POSITION } from 'vue-toastification'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const toast = useToast()

const handleSubmit = async (e: any) => {
  e.preventDefault()

  const serviceID = 'service_vllsmxj'
  const templateID = 'template_2bb0yqg'
  const userID = 'fKBdg7i_NYWLk0db1'

  const url = `https://api.emailjs.com/api/v1.0/email/send`

  const headers = {
    'Content-Type': 'application/json'
  }

  const params = {
    service_id: serviceID,
    template_id: templateID,
    user_id: userID,
    template_params: form.value
  }

  try {
    const response = await axios.post(url, params, { headers })
    console.log(response.data)
    toast.success('Message sent successfully!', {
      position: POSITION.TOP_CENTER,
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: 'button',
      icon: true,
      rtl: false
    })
  } catch (err) {
    console.log(err)
    toast.error('Message sending failed. Please try again.', {
      position: POSITION.TOP_CENTER,
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: 'button',
      icon: true,
      rtl: false
    })
  }

  // Clear the form
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 2rem;
  width: 50%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  text-align: left;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
}
.form-group textarea {
  height: 10rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  background: #00ccff;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0088aa;
}

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.socials > a > * {
  height: 2rem;
}

.socials > a > *:hover {
  cursor: pointer;
  color: #00ccff;
}
</style>
