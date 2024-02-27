<template>
    <router-view v-slot="{ Component, route }">
        <transition name="el-fade-in" mode="out-in">
            <component :is="Component" :key="route.path" class="app-container-grow" />
        </transition>
    </router-view>
</template>

<script lang="ts">
export default {
    name: '',
    setup() {

    },
}

</script>
<style scoped></style>