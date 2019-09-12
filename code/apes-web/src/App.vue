<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import Index from "./pages/portal/Index";
export default {
  name: 'App',
  components: { Index }
}
</script>
