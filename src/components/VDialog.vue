<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

const emit = defineEmits(['confirm', 'close']);

defineProps({
    title: {
        type: String,
        required: true,
    },
    width: {
        type: Number,
        default: 350,
    },
    showBtn: {
        type: Boolean,
        default: true,
    },
});

function sureDoSomething() {
    emit('confirm');
}

function closeDialog() {
    emit('close');
}
</script>
<template>
    <q-card :style="{ minWidth: width + 'px' }">
        <q-card-actions>
            <div class="title">
                <span :class="$q.dark.isActive ? 'text-accent' : 'text-dark'">{{
                    title
                }}</span>
            </div>
            <q-space></q-space>
            <q-btn
                round
                flat
                @click="closeDialog"
                :color="$q.dark.isActive ? 'dark' : '#171a1d80'"
                icon="mdi-close"
            />
        </q-card-actions>
        <q-card-section>
            <div class="example-row-stacked-to-horizontal q-pl-xs">
                <slot></slot>
            </div>
        </q-card-section>
        <q-card-actions align="right" class="q-mr-sm" v-if="showBtn">
            <q-btn flat class="bg-accent cancel" @click="closeDialog"
                >取消
            </q-btn>
            <q-btn flat class="bg-primary confirm" @click="sureDoSomething"
                >确定
            </q-btn>
        </q-card-actions>
    </q-card>
</template>

<style scoped lang="scss">
.title {
    color: #000;
    margin-left: 5px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
}

.submit {
    color: var(--q-secondary);
    font-style: normal;
    font-weight: 400;
    width: 80px;
    border-radius: 2px;
}

.confirm {
    color: var(--q-secondary);
    font-style: normal;
    font-weight: 400;
    width: 63px;
    border-radius: 2px;
}

.cancel {
    color: var(--text-4, #4e5969);
    width: 63px;
    font-style: normal;
    font-weight: 400;
    border-radius: 2px;
}
</style>
