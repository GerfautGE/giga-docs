<template>
    <div id="landing">
        <div class="circle"></div>
        <img src="/logo/logo.svg" />
        <div id="actions">
            <UButton
                icon="i-heroicons-rocket-launch"
                size="sm"
                color="gray"
                variant="solid"
                label="Get Started"
                :trailing="false"
                to="/docs"
            />
            <UButton
                icon="i-mdi-github"
                size="sm"
                color="black"
                variant="solid"
                label="View on GitHub"
                :trailing="false"
                to="https://github.com/florentinl/giga"
            />
        </div>
    </div>
</template>

<style scoped>
#landing {
    width: 80%;
    height: 80%;
}

#authors {
    text-align: center;
    margin-top: 2em;
}

.author-list {
    display: flex;
    gap: 1em;
    justify-content: center;
}

img {
    width: 25em;
    height: 25em;
    margin: 0 auto;
}
#actions {
    display: flex;
    justify-content: center;
    gap: 1em;
    margin: 2em;
}
</style>
