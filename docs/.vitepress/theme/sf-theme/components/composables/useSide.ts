import { computed } from 'vue';
import { useData } from 'vitepress';
export function useSidebar() {
    const { frontmatter, theme } = useData();
    const hasSidebar = computed(() => {
        return (frontmatter.value.sidebar !== false &&
            theme.value.sidebar?.length > 0 &&
            frontmatter.value.layout !== 'home');
    });
    return {
        hasSidebar
    }
}
