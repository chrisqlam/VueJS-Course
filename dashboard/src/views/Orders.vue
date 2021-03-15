<template>
  <h3 class="page-title">Orders</h3>
  <slot name="total"></slot>
  <section>
    <sales-total></sales-total>
    <div class="order_wrapper">
      <div class="order" v-for="order in orders" :key="order.id">
        <p>Order: {{ order.id }}</p>
        <ul>
          <li v-for="(item, index) in order.items" :key="index">
            <p>{{ item.name }} - $ {{ item.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import SalesTotal from "@/components/SalesTotal";

export default {
  name: "Orders",
  components: {
    SalesTotal,
  },
  props: {
    totalSalesValue: {
      type: Number,
    },
  },
  inject: ['orders']
};
</script>
<style scoped>
ul {
  list-style: none;
  font-style: italic;
}

.order {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>