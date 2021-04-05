<template>
  <div class="event-view">
    <Event />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Event from "@/components/Event.vue";

@Component({
  components: {
    Event,
  },
})
export default class NewEventView extends Vue {}
</script>
