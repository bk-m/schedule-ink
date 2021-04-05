<template>
  <div class="new-event-view">
    <NewEvent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewEvent from "@/components/NewEvent.vue";

@Component({
  components: {
    NewEvent,
  },
})
export default class NewEventView extends Vue {}
</script>
