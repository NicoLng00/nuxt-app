<script setup>
import { useSupabaseAuthClient } from "#supabase";
const client = useSupabaseAuthClient();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMsg = ref(null);
const isLoading = ref(false);

async function login() {
  try {
    isLoading.value = true;
    errorMsg.value = null;
    
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    if (data.user) {
      await navigateTo("/profile");
    }
  } catch (error) {
    errorMsg.value = error.message;
  } finally {
    isLoading.value = false;
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
        <div v-if="errorMsg" class="text-red-500 text-sm mb-2">{{ errorMsg }}</div>
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
          :disabled="isLoading"
        >
          {{ isLoading ? 'Caricamento...' : 'Accedi' }}
        </button>
        <div class="text-sm text-gray-600">
          Non hai un account? 
          <NuxtLink to="/register" class="text-[#22543d] hover:underline">
            Registrati
          </NuxtLink>
        </div>
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
