<template>
  <div class="new-event">
    <h1>NEW EVENT</h1>
    <form @submit.prevent="submit">
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        v-model="event.description"
      />
      <button type="submit">Submit</button>
    </form>
    <button @click="affe">TEST</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ScheduledEvent } from "@/models/ScheduledEvent";
import { serializeService } from "@/services/SerializeService";

@Component
export default class NewEvent extends Vue {
  private event: ScheduledEvent = {
    description: "",
    participants: [],
  };

  submit(): void {
    console.log("********************");
    console.log(this.event);
  }

  affe(): void {
    const serialized = serializeService.dumps(this.event);
    console.log("*** SER");
    console.log(serialized);
    const unmarshalled = serializeService.loads(serialized);
    console.log("*** UNSER");
    console.log(unmarshalled);
  }
}
</script>
