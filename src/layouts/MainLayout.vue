<template>
    <q-layout view="lhh lpR lff">
        <q-header reveal bordered class="bg-secondary">
            <ToolBar />
        </q-header>
        <q-drawer
            :width="240"
            show-if-above
            v-model="drawer"
            side="left"
            bordered
            class="bg-dark text-secondary"
        >
            <div class="box">
                <img
                    src="~src/assets/img.png"
                    style="height: 43px"
                    :alt="Key.SYS_NAME"
                />
                <div class="text">{{ parentText }}</div>
            </div>
            <q-scroll-area style="height: 90vh">
                <NavList />
            </q-scroll-area>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Key } from 'src/utils/useStatic';
import { useRouteMeta } from 'src/hooks/useRouteMeta';
import ToolBar from 'layouts/components/ToolBar.vue';
import NavList from 'layouts/components/NavList.vue';

const { parentText } = useRouteMeta();

const drawer = ref(true);
</script>
<style scoped>
.box {
    height: 60px;
    display: flex;
    justify-content: start;
}

.box img {
    display: block;
    margin: auto 0 auto 10px;
}

.box .text {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    margin-left: 10px;
}
</style>
