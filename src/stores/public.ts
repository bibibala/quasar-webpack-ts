import { defineStore } from 'pinia';

export const usePublic = defineStore('public', {
    persist: true,
    state: () => ({
        ACTIVE_INDEX: 6,
    }),
    getters: {},
    actions: {},
});
