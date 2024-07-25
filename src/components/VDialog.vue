<template>
    <q-card>
        <q-card-section>
            <div class="text-h6">{{ title}}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
            <slot></slot>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
            <q-btn flat label="Decline" color="primary" @click="close" />
            <q-btn flat label="Accept" color="primary" @click="confirm" />
        </q-card-actions>
    </q-card>

</template>
<script setup lang="ts">

defineExpose({
    title: {
        required: true,
        type: String
    }
});

const emits = defineEmits(['close', 'confirm']);


function close() {
    emits('close');
}

function confirm() {
    emits('confirm');
}
</script>
