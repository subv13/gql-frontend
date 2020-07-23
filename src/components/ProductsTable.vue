<template>
  <ApolloQuery :query="query" :variables="{ currentPage }" @result="onResult">
    <template v-slot="{ result: { loading, error, data } }">
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border"></div>
      </div>
      <div v-else>
        <b-table
          v-if="data !== null"
          striped
          hover
          :items="data.products.objectList"
          :fields="tableFields"
        />
        <b-pagination
          v-if="data !== null"
          v-model="currentPage"
          :total-rows="data.products.paginator.count"
          :per-page="data.products.paginator.perPage"
          align="fill"
          size="sm"
          class="my-0"
        />
      </div>
    </template>
  </ApolloQuery>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'

export default Vue.extend({
  name: 'ProductsTable',

  data() {
    return {
      tableFields: [
        {key: 'id', label: 'ID'},
        {key: 'name', label: 'Имя'},
        {key: 'category', label: 'Категория'},
      ],
      currentPage: 1,
      query: gql`query products($currentPage: Int!) {
        products(page: $currentPage, perPage: 5, sorters: {field: ID, order: DESC}) {
          objectList {
            id
            name
            category
          }
          pageNumber
          paginator {
            perPage
            numPages
            count
          }
        }
      }`
    }
  },
  methods: {
    onResult(result: any) {
      console.log(result)
    }
  }
})
</script>
