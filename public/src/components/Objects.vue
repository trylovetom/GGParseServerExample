<template>
  <div class="objects">
    <h1>Objects({{ objectId }})</h1>
    <h2>{{ data }}</h2>
    <h2>{{ objectResponse }}</h2>
    <button @click="creatingObjects(data)">Creating</button>
    <button @click="retrievingObjects()">Retrieving</button>
    <button @click="updatingObjects(updateData)">Updating</button>
    <button @click="deletingObjects()">Deleting</button>
    <hr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => {
    return {
      data: {
        score: 1337,
        playerName: 'Sean Plott',
        cheatMode: false
      },
      updateData: {
        score: 73453
      }
    }
  },
  computed: mapGetters({
    objectResponse: 'objectResponse',
    objectId: 'objectId'
  }),
  methods: mapActions([
    'creatingObjects',
    'retrievingObjects',
    'updatingObjects',
    'deletingObjects'
  ])
}
</script>
