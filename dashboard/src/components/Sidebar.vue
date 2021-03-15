<template>
  <nav>
    <ul>
      <li v-for="page in pages" :key="page">
        <!-- <slot :page="page"></slot> -->
        <a @click="changePage(page)">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pages: ["Overview", "Orders", "Best Sellers"],
    };
  },
  inject: ["changePage"],
};
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
    
    li {
        padding: 10px 10px;
        cursor: pointer;
    }
</style>