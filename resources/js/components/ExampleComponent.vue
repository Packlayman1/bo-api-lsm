<template>
    <div>
      <transition name="router-anim">
        <router-view />
      </transition>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
