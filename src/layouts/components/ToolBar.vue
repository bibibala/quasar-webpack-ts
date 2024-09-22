<template>
    <q-toolbar style="height: 60px" class="full-width">
        <q-btn dense flat round icon="mdi-apps" color="dark" @click="close" />
        <q-space></q-space>
        <!--        <q-btn-->
        <!--            unelevated-->
        <!--            dense-->
        <!--            round-->
        <!--            icon="mdi-bell-outline"-->
        <!--            class="q-mr-md bg-dark"-->
        <!--        >-->
        <!--            <q-badge color="negative" rounded floating>99+</q-badge>-->
        <!--            <q-menu>-->
        <!--                <q-card style="min-width: 400px">-->
        <!--                    <q-card-actions align="between">-->
        <!--                        <span class="text-weight-bold">消息通知</span>-->
        <!--                        <q-btn unelevated flat color="primary" icon="mdi-broom" rounded></q-btn>-->
        <!--                    </q-card-actions>-->
        <!--                    <q-separator></q-separator>-->
        <!--                    <q-card-section>-->
        <!--                        <q-scroll-area style="height: 30vh">-->
        <!--                            <q-list dense>-->
        <!--                                <q-item dense>-->
        <!--                                    <q-item-section>-->
        <!--                                        <q-item-label>来自 : 芭芭拉</q-item-label>-->
        <!--                                        <q-item-label caption lines="2">-->
        <!--                                            测量超限 ......................-->
        <!--                                        </q-item-label>-->
        <!--                                    </q-item-section>-->
        <!--                                    <q-item-section side top>-->
        <!--                                        <q-item-label caption>2024.07.01 16:34:34</q-item-label>-->
        <!--                                        <q-btn flat unelevated round color="primary" icon="mdi-close" rounded></q-btn>-->
        <!--                                    </q-item-section>-->
        <!--                                </q-item>-->
        <!--                                <q-separator></q-separator>-->
        <!--                            </q-list>-->
        <!--                        </q-scroll-area>-->
        <!--                    </q-card-section>-->
        <!--                </q-card>-->
        <!--            </q-menu>-->
        <!--        </q-btn>-->
        <q-avatar size="md" class="q-mr-xs">
            <q-img src="~assets/img.png" width="50"></q-img>
        </q-avatar>
        <q-btn-dropdown
            flat
            color="dark"
            class="text-bold"
            :label="'用户000001'"
            style="font-size: 15px"
        >
            <q-list>
                <q-item
                    v-for="item in tabList"
                    @click="eventChange(item.id)"
                    :key="item.id"
                    clickable
                    v-close-popup
                >
                    <q-item-section>{{ item.name }}</q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </q-toolbar>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Key } from 'src/utils/useStatic';

const router = useRouter();

const tabList = [{ name: '退出登录', id: 0 }];

function eventChange(mode: number) {
    switch (mode) {
        case 0:
            logout();
            break;
    }
}

const logout = () => {
    Key.clearStorage();
    router.push({ name: Key.ENTRY_NAME });
};
</script>
<style scoped lang="scss"></style>
