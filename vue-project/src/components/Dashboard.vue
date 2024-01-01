<script setup>
import {onBeforeMount, ref} from 'vue';
import {authStore} from '../store/authStore';

const students = ref([])

function deleteStudent(id) {
    fetch(`${authStore.serverUrl}/api/students/${id}`,{
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${authStore.getUserToken()}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then( data => {
        getStudents()
    })
    .catch(err => console.log(err))
}

function getStudents(){
    const token = authStore.getUserToken()
    fetch(`${authStore.serverUrl}/api/students`,{
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	})
    .then(res => res.json())
    .then( data => {
        students.value = data.students
        console.log(data)
    })
    .catch(err => console.log(err))
}

onBeforeMount(() => {
    getStudents() 
})


</script>
<template>
<div class="font-sans antialiased bg-grey-lightest">
  <!-- Content -->
  <div class="w-full bg-grey-lightest" style="padding-top: 4rem;">
    <div class="container mx-auto py-8">
      <div class="w-5/6 lg:w-10/12 mx-auto bg-white rounded shadow">
        <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Welcome, {{ authStore.user.user.name }}!</div>
        <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Student List
            <router-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/student/add">Add new student</router-link>
        </div>
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td>{{ student.name }}</td>
                    <td>{{ student.roll }}</td>
                    <td>{{ student.phone }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{ student.address }}</td>
                    <td>
                        <router-link :to="{ name: 'student-edit', params: { id: student.id }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </router-link>
                        <button @click="deleteStudent(student.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  </div>
</div>
</template>