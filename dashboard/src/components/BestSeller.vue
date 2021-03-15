<template>
    <article class="stats">
        <h4>Best Selling Items: <span>&#128293;</span></h4>
        <span class="light-text">{{ bestSeller }}</span>
    </article>
</template>

<script>
export default {
    inject: ['bestSeller']
}
</script>