<template>
  <div class="objects">
    <h1>Users({{ userObjectId }})</h1>
    <h2>Session Token: "{{ sessionToken }}"</h2>
    <h2>Current User: {{ currentUser }}</h2>
    <h2>{{ userResponse }}</h2>
    <input type="text" placeholder="username" v-model="userData.username">
    <input type="password" placeholder="password" v-model="userData.password">
    <input type="email" placeholder="email" v-model="userData.email">
    <input type="phone" placeholder="phone" v-model="userData.phone">
    <br>
    <button @click="signingUp(userData)">Signing Up</button>
    <button @click="loggingIn(userData)">Logging In</button>
    <button @click="retrievingUsers()">Retrieving</button>
    <button @click="retrievingCurrentUser()">Retrieving Current User</button>
    <button @click="updatingUsers(userData)">Updating</button>
    <button @click="deletingUsers()">Deleteing</button>
    <hr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => {
    return {
      userData: {
        username: 'asdf',
        password: 'asdf',
        email: 'asdf@asdf.com',
        phone: 'asdf'
      }
    }
  },
  computed: mapGetters({
    userResponse: 'userResponse',
    userObjectId: 'userObjectId',
    sessionToken: 'sessionToken',
    currentUser: 'currentUser'
  }),
  methods: mapActions([
    'signingUp',
    'loggingIn',
    'retrievingUsers',
    'retrievingCurrentUser',
    'updatingUsers',
    'deletingUsers'
  ])
}
</script>
