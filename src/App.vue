<template>
    <div v-if="$route.fullPath === '/'">
        <main>
            <RouterView/>
        </main>
    </div>

    <div v-if="$route.fullPath === '/bitcoin'">
        <main>
            <RouterView/>
        </main>
    </div>

    <div v-if="$route.fullPath === '/ethereum'">
        <main>
            <RouterView/>
        </main>
    </div>
</template>
