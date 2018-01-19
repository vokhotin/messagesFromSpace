<template>
 #app
    .card(v-for="ticket in tickets")
      .card-header
        .card-title {{ ticket.id }}
        .card-subtitle {{ convertDateToTimeAgo(ticket.created_at) }}
.card-body {{ ticket.body }}
</template>

<script>
import { mapGetters } from 'vuex'
import prettydate from 'pretty-date'
export default {
  name: 'message-list',
  computed: mapGetters(['tickets']),
  methods: {
    convertDateToTimeAgo (date) {
      return prettydate.format(new Date(date))
    }
  }
}
</script>

<style>
  header {
    margin-top: 50px;
  }
</style>
