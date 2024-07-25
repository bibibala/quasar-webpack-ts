<template>
    <div class="fit row justify-center q-pa-xl">
        <q-img :src="mode === 0 ? noData : noPeople" width="105px"></q-img>
    </div>
</template>
<script setup lang="ts">
import noData from 'src/assets/img/noData.png';
import noPeople from 'src/assets/img/noPeople.png';

defineProps({
    mode: {
        type: Number,
        default: 0,
    },
});
</script>

<style scoped lang="scss"></style>
