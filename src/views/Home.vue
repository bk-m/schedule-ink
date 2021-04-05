<template>
  <div class="home">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>
        <router-link :to="{ name: 'Event', params: { base64String: 'AFFE' } }"
          >Event</router-link
        >
      </li>
      <li><router-link to="/new-event">New Event</router-link></li>
    </ul>
  </div>
</template>
