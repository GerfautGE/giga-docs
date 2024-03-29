<template>
    <UCard>
        <template #header>
            <Header />
        </template>
        <div class="body">
            <NuxtPage />
        </div>

        <template #footer>
            <Footer />
        </template>
    </UCard>
</template>

<style scoped>
.body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.footer {
    display: flex;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px;
}
</style>
