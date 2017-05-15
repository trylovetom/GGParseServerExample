<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h2>{{ helloResponse }}</h2>
    <button @click="sayHello">Hello!</button>
    <hr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => {
    return {
      message: 'Welcome to GG\'s Parse Server Example'
    }
  },
  computed: mapGetters({
    helloResponse: 'sayHelloResponse'
  }),
  methods: mapActions([
    'sayHello'
  ])
}
</script>
