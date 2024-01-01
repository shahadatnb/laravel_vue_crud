<script setup>
import {ref} from 'vue'
import { authStore } from '../store/authStore';
const auth = authStore 
const email = ref('')
const password =  ref('')
</script>
<template>
  <div class="font-sans antialiased bg-grey-lightest">
  <!-- Content -->
  <div class="w-full bg-grey-lightest" style="padding-top: 4rem;">
    <div class="container mx-auto py-8">
      <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Sign In</div>
            <div class="py-4 px-8">
                <p class="text-gray-600 mb-6 text-sm">
                    <span v-if="authStore.errorMessage.message" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{{ authStore.errorMessage.message }}</span>
                </p>
            </div>
            <div class="py-4 px-8">
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"  v-model="email" type="email" placeholder="Your email address">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"  v-model="password" type="password" placeholder="Your secure password">
                </div>
                <div class="flex items-center justify-between mt-8">
                    <button @click="auth.authenticate(email, password)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>

</div>
</template>