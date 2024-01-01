<script setup>
import {ref} from 'vue'
import { authStore } from '../store/authStore';
import router from '../router/router'
const auth = authStore 
const name = ref('')
const email =  ref('')
const roll = ref('')
const phone =  ref('')
const address =  ref('')

function addStudent(name, email, roll, phone, address) {
    const token = auth.getUserToken()
    fetch(`${auth.serverUrl}/api/students`,{
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            roll: roll,
            phone: phone,
            address: address
        })
    })
    .then(res => res.json())
    .then(data => {
        router.push('/dashboard')
    })
    
}
</script>
<template>
  <div class="font-sans antialiased bg-grey-lightest">
  <!-- Content -->
  <div class="w-full bg-grey-lightest" style="padding-top: 4rem;">
    <div class="container mx-auto py-8">
      <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Add a new student</div>            
            <div class="py-4 px-8">
                <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="name">Name</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="name" id="name" type="text" placeholder="name">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="email" id="email" type="email" placeholder="email address">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="roll">Roll</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="roll" id="roll" type="text" placeholder="Roll">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="phone">Phone</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="phone" id="phone" type="text" placeholder="phone">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="address">Address</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="address" id="address" type="text" placeholder="address">
                </div>
                <div class="flex items-center justify-between mt-8">
                    <button @click="addStudent(name, email, roll, phone, address)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save
</button>
                </div>
            </div>
        </div>

    </div>
  </div>

</div>
</template>