<script setup>

</script>

<template>
  <header class="bg-white">
        <nav class="flex justify-between items-center w-[92%]  my-10">
            <div
                class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-500" href="#">Dashboard</a>
                    </li>                   
                    <li>
                        <router-link to="/dashboard" class="hover:text-gray-500">Students</router-link>
                    </li>                   
                </ul>
            </div>
            <div class="flex items-center">
                <router-link to="/login" class="bg-[#2563eb] text-white px-5 py-2 mr-5 rounded-full hover:bg-[#87acec]">Login</router-link>
                <router-link to="/register" class="bg-[#2563eb] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Register</router-link>
            </div>
        </nav>
    </header>
  
    
   

  <router-view></router-view>

</template>
