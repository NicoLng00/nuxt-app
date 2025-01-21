<script setup>
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ebmphmuxovvhrksohugl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVibXBobXV4b3Z2aHJrc29odWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NjYwMDcsImV4cCI6MjA1MzA0MjAwN30.nlUhLWOnbXfLpB48EHP68sUS0t2SLJyBw9zKKnqxY-g";

const supabase = createClient(supabaseUrl, supabaseKey);

const email = ref("");
const password = ref("");

// Function to handle login
async function login() {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    console.error("Error logging in:", error.message);
  } else {
    console.log("Login successful");
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div
      class="bg-white w-[85%] max-w-2xl h-[25rem] rounded-lg shadow-md flex overflow-hidden p-8"
    >
      <div
        class="flex-1 flex justify-center items-center border-r border-gray-300 p-4"
      >
        <p class="text-center text-xl font-semibold">Benvenuto!</p>
      </div>
      <div
        class="flex-1 flex flex-col justify-center items-center p-4 space-y-4"
      >
        <div class="relative w-full max-w-xs">
          <input
            type="email"
            class="p-2 border border-gray-300 rounded-md w-full pr-10"
            v-model="email"
          />
          <Icon
            name="ion:mail-outline"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <div class="relative w-full max-w-xs">
          <input
            type="password"
            class="p-2 border border-gray-300 rounded-md w-full pr-10"
            v-model="password"
          />
          <Icon
            name="ion:eye-outline"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <button
          class="bg-[#22543d] text-white font-bold py-2 px-3 rounded-full hover:bg-white hover:text-black hover:border hover:border-[#2a674a] transition-colors duration-300 w-full"
          @click="login"
        >
          Accedi
        </button>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-image: linear-gradient(to top, #22543d 0%, #000000 50%);
  min-height: 100vh;
  margin: 0;
}

input:focus {
  outline: none;
  border-color: #2a674a;
  box-shadow: 0 0 0 3px rgba(34, 84, 61, 0.3);
}

button {
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
</style>
