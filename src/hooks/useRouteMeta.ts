import { computed } from 'vue';
import { RouteRecordNormalized, useRouter } from 'vue-router';

export function useRouteMeta() {
    const router = useRouter();

    const parentText = computed(() => {
        const matchedRoutes: RouteRecordNormalized[] =
            router.currentRoute.value.matched;
        return matchedRoutes.length > 0
            ? (matchedRoutes[0].meta.title as string)
            : '';
    });

    const text = computed(() => {
        return router.currentRoute.value.meta.title as string;
    });

    return {
        parentText,
        text,
    };
}
