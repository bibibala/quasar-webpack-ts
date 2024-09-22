<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { usePublic } from 'stores/public';

const { ACTIVE_INDEX } = storeToRefs(usePublic());

const nav = [
    {
        name: '管理',
        id: 0,
        path: '',
        icon: 'mdi-sitemap-outline',
        children: [
            { name: '测试1', id: 6, icon: '', path: '/index' },
            { name: '测试2', id: 7, icon: '', path: '/index' },
        ],
    },
];

const list = [
    { name: '测试3', id: 1, icon: 'mdi-tunnel-outline', path: '/index' },
    { name: '测试4', id: 2, icon: 'mdi-road', path: '/index' },
];

function indexChange(index: number) {
    ACTIVE_INDEX.value = index;
}

const open = computed(() => {
    return [6, 7].includes(ACTIVE_INDEX.value);
});
</script>

<template>
    <!--    style="border-top:1px solid #e0e0e0"-->
    <div>
        <q-expansion-item
            :label-lines="1"
            group="somegroup"
            expand-separator
            :default-opened="open"
            icon="mdi-sitemap-outline"
            label="管理"
        >
            <q-list bordered>
                <q-item
                    clickable
                    v-ripple
                    :to="item.path"
                    v-for="item in nav[0].children"
                    :key="item.id"
                    @click="indexChange(item.id)"
                    :active="ACTIVE_INDEX === item.id"
                    active-class="bg-primary text-secondary"
                >
                    <q-item-section avatar>
                        <q-icon :name="item.icon" />
                    </q-item-section>
                    <q-item-section> {{ item.name }}</q-item-section>
                </q-item>
            </q-list>
        </q-expansion-item>
        <q-list>
            <q-item
                clickable
                v-ripple
                :to="item.path"
                v-for="item in list"
                :key="item.id"
                @click="indexChange(item.id)"
                :active="ACTIVE_INDEX === item.id"
                active-class="bg-primary text-secondary"
            >
                <q-item-section avatar>
                    <q-icon :name="item.icon" />
                </q-item-section>
                <q-item-section> {{ item.name }}</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<style scoped lang="scss"></style>
