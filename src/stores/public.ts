import { defineStore } from 'pinia';

export const usePublic = defineStore('public', {
    persist: true,
    state: () => ({
        routerName: [],
        navIndex: '',
        expansionIndex: '0',
    }),
    getters: {},
    actions: {},
});
