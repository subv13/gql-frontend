<template>
  <div id="app" class="container">
    <div v-if="$apollo.loading" class="d-flex justify-content-center">
      <div class="spinner-border"></div>
    </div>


    <div v-else>
      <b-button v-b-modal.create>Создать</b-button>

      <b-modal id="create" title="Создать" hide-footer>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Имя"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.name"
              required
              placeholder="Имя"
            />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Категория"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.category"
              required
              placeholder="Категория"
            />
          </b-form-group>

          <b-button type="submit" variant="primary">Создать</b-button>
          <b-button type="reset" variant="danger">Отмена</b-button>
        </b-form>
      </b-modal>

      <b-table
        striped
        hover
        :items="products.objectList"
        :fields="fields"
      />
      <b-pagination
        v-model="currentPage"
        :total-rows="products.paginator.count"
        :per-page="products.paginator.perPage"
        align="fill"
        size="sm"
        class="my-0"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'
import {CreateProductPayload, CreateProductData} from "@/generated/graphql";

export default Vue.extend({
  data() {
    return {
      form: {
        name: '',
        category: '',
      },
      fields: [
        {key: 'id', label: 'ID'},
        {key: 'name', label: 'Имя'},
        {key: 'category', label: 'Категория', class: 'text-center'},
      ],
      currentPage: 1
    }
  },
  apollo: {
    products: {
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
      }`,

      variables() {
        return {
          currentPage: this.currentPage
        }
      }
    }
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()

      const payload: CreateProductPayload = {
        name: this.form.name,
        category: this.form.category
      }

      this.$apollo.mutate({
        mutation: gql`mutation ($payload: CreateProductPayload!) {
          products {
            create(payload: $payload) {
              recordID
              record {
                id
                name
                category
              }
              error {
                __typename
                ... on ProductAlreadyExistsError {
                  message
                }
              }
            }
          }
        }`,

        variables: {
          payload,
        },

        update: (store, result) => {
          const data: CreateProductData = result.data
          console.log(store)

          if (data && !data.error && !data.record) {

          }
        },
      }).then((result) => {
        console.log(result)
        this.$bvModal.hide('create')
      }).catch(console.log)
    },
    onReset(event: Event) {
      event.preventDefault()
      this.$bvModal.hide('create')
      this.form.name = ''
      this.form.category = ''
    }
  }
})
</script>

<style>
</style>
