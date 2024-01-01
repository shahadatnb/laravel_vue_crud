<script setup>
import {ref} from 'vue'
import { authStore } from '../store/authStore';
const auth = authStore 
const name = ref('')
const email = ref('')
const password =  ref('')
const password_confirmation =  ref('')
</script>
<template>
  <div class="font-sans antialiased bg-grey-lightest">

  <!-- Content -->
  <div class="w-full bg-grey-lightest" style="padding-top: 4rem;">
    <div class="container mx-auto py-8">
      <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
            {{ auth.errorMessage }}
            <div class="py-4 px-8">
                <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="name">Name</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="name" id="name" type="text" placeholder="Your name">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="email" id="email" type="email" placeholder="Your email address">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="password" id="password" type="password" placeholder="Your secure password">
                    <p class="text-grey text-xs mt-1">At least 8 characters</p>
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password_confirmation">Confirm Password</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="password_confirmation" id="password_confirmation" type="password" placeholder="Your secure password">
                    <p class="text-grey text-xs mt-1">At least 8 characters</p>
                </div>
                <div class="flex items-center justify-between mt-8">
                    <button @click="auth.register(name, email, password,password_confirmation)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign up
</button>
                </div>
            </div>
        </div>
        <p class="text-center my-4">
            <a href="#" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a> <br/><br/>
            <a href="#" class="bg-blue-500  hover:bg-blue-700 tex2 text-white p-3 rounded">Sign In</a>
        </p>


    </div>
  </div>

</div>
</template>