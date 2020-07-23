<template>
  <div id="app" class="container">
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
    <ProductsTable/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'
import {CreateProductPayload, CreateProductData} from '@/generated/graphql'
import ProductsTable from '@/components/ProductsTable.vue'

export default Vue.extend({
  components: {ProductsTable},
  data() {
    return {
      form: {
        name: '',
        category: '',
      },
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
