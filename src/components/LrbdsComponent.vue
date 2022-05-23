<script>
import axios from "axios";
export default {
  mounted() {
    async function fetchUsers() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    }
    fetchUsers().then((users) => {
      console.log(users);
      this.users = users;
    });
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>

<template>
  <section
    class="h-screen w-screen flex flex-col justify-center antialiased text-gray-600 p-4"
  >
    <div class="h-full">
      <!-- Table -->
      <div class="bg-gray-700 shadow-lg rounded-sm border border-slate-900">
        <header class="px-5 py-4 border-b border-slate-900">
          <h2 class="font-semibold text-center text-stone-900">Leaderboards</h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-stone-900 bg-slate-700"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">User</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Type of game</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Points</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">pos</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100 text-white">
                <tr v-for="user in users" v-bind:key="user.name">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          src="https://picsum.photos/50/50"
                          class="rounded-full"
                          width="40"
                          height="40"
                          alt="{{user.name
                          }}"
                        />
                      </div>
                      <div class="font-medium text-white">{{ user.name }}</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">15s game</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      {{ Math.round(Math.random() * 100) }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">
                      {{ users.indexOf(user) + 1 }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
