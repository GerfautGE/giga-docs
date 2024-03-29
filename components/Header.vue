<script setup lang="ts">
const { metaSymbol } = useShortcuts();
const links = [
    {
        label: "About",
        icon: "i-heroicons-information-circle",
        to: "/",
    },
    {
        label: "Documentation",
        icon: "i-heroicons-book-open",
        to: "/docs",
    },
    {
        label: "Articles",
        icon: "i-heroicons-pencil",
        to: `/articles`,
    },
];

const isOpen = ref(false);

defineShortcuts({
    meta_k: {
        usingInput: true,
        handler: () => {
            isOpen.value = !isOpen.value;
        },
    },
});

const people = [
    { id: 1, label: "Wade Cooper" },
    { id: 2, label: "Arlene Mccoy" },
    { id: 3, label: "Devon Webb" },
    { id: 4, label: "Tom Cook" },
    { id: 5, label: "Tanya Fox" },
    { id: 6, label: "Hellen Schmidt" },
    { id: 7, label: "Caroline Schultz" },
    { id: 8, label: "Mason Heaney" },
    { id: 9, label: "Claudie Smitham" },
    { id: 10, label: "Emil Schaefer" },
];

const selected = ref([]);
</script>

<template>
    <div class="header">
        <UButton
            icon="i-heroicons-magnifying-glass"
            label="Search..."
            @click="isOpen = true"
            color="gray"
        >
            <template #trailing>
                <div class="flex items-center gap-0.5">
                    <UKbd>{{ metaSymbol }}</UKbd>
                    <UKbd>K</UKbd>
                </div>
            </template>
        </UButton>
        <UModal v-model="isOpen" :transition="false">
            <div id="fix">
                <UCommandPalette
                    v-model="selected"
                    multiple
                    nullable
                    :groups="[{ key: 'people', commands: people }]"
                />
            </div>
        </UModal>
        <UHorizontalNavigation :links="links" class="nav">
            <template #default="{ link }">
                <span class="group-hover:text-primary relative">{{
                    link.label
                }}</span>
            </template>
        </UHorizontalNavigation>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
}
.nav {
    justify-content: flex-end;
}
</style>
