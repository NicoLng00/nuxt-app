<script setup>
import { useSupabaseAuthClient } from "#supabase";
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const router = useRouter();

definePageMeta({
  middleware: ['auth']
})

async function logout() {
  try {
    const { errors } = await client.auth.signOut();

    if (errors) throw new Error(errors.message);

    navigateTo("/");
  } catch (error) {
    console.error(error.message);
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
        <p class="text-center text-xl font-semibold">Your Profile!</p>
      </div>
      <div
        class="flex-1 flex flex-col justify-center items-center p-4 space-y-4"
      >
        <button
          class="bg-[#22543d] text-white font-bold py-2 px-3 rounded-full hover:bg-white hover:text-black hover:border hover:border-[#2a674a] transition-colors duration-300 w-full"
          @click="logout"
        >
          Logout
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
