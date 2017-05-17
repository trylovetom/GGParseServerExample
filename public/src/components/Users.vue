<template>
  <div class="objects">
    <h1>Users({{ userObjectId }})</h1>
    <h2>{ Session Token: "{{ sessionToken }}" }</h2>
    <h2>Session Token: "{{ sessionToken }}"</h2>
    <h2>{{ userResponse }}</h2>
    <input type="text" placeholder="username" v-model="userData.username">
    <input type="password" placeholder="password" v-model="userData.password">
    <input type="email" placeholder="email" v-model="userData.email">
    <input type="phone" placeholder="phone" v-model="userData.phone">
    <button @click="signingUp(userData)">SigningUp</button>
    <button @click="loggingIn(userData)">LoggingIn</button>
    <button @click="signingUp(userData)">Signing Up</button>
    <button @click="loggingIn(userData)">Logging In</button>
    <button @click="retrieveingUsers()">Retrieveing</button>
    <!-- <button @click="retrieveingObjects()">Retrieveing</button> -->
    <!-- <button @click="updatingObjects(updateData)">Updating</button> -->
    <!-- <button @click="deletingObjects()">Deleting</button> -->
    <hr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted: () => {
    mapActions([
      'signingUp',
      'loggingIn'
    ])
  },
  data: () => {
    return {
      userData: {
        username: 'asdf',
        password: 'asdf',
        email: 'asdf',
        phone: 'asdf'
      }
    }
  },
  computed: mapGetters({
    userResponse: 'userResponse',
    userObjectId: 'userObjectId',
    sessionToken: 'sessionToken'
  }),
  methods: mapActions([
    'signingUp',
    'loggingIn',
    'retrieveingUsers'
  ])
}
</script>
