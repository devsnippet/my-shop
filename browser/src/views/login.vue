<style scoped>

.body {
    background: #fff;
}

</style>

<template>

<h1>list</h1>

<img src="../assets/logo.png" />
<bottom-tab-bar></bottom-tab-bar>

</template>

<script>

import {
    getName, getCount
}
from '../vuex/getters';
import {
    incrementCounter, fetchname
}
from '../vuex/actions';
import bottomTabBar from '../components/bottomTabBar.vue';

module.exports = {
    components: {
        'bottom-tab-bar': bottomTabBar
    },
}

</script>
