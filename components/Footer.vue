<template>
    <div class="footer">
        <div class="cta">
            <UButton
                icon="i-mdi-github"
                size="sm"
                color="gray"
                variant="solid"
                label="Star the project"
                :trailing="false"
                to="https://github.com/florentinl/giga"
            />
        </div>
        <div class="authors">
            <p>Made by</p>
            <div class="author-list">
                <UButton
                    label="florentinl"
                    color="gray"
                    to="https://github.com/florentinl"
                >
                    <template #leading>
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/101594032?v=4"
                            size="2xs"
                        />
                    </template>
                </UButton>
                <UButton
                    label="GerfautGE"
                    color="gray"
                    to="https://github.com/gerfautge"
                >
                    <template #leading>
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/73294402?v=4"
                            size="2xs"
                        />
                    </template>
                </UButton>
            </div>
        </div>
    </div>
</template>

<style>
.footer {
    justify-content: space-between;
}

.cta {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
}

.authors {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
}

.author-list {
    display: flex;
    gap: 0.5rem;
}
</style>
