import Vue from 'vue';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueApollo);
Vue.config.productionTip = false;
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
});
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});
new Vue({
    render: h => h(App),
    apolloProvider,
}).$mount('#app');
//# sourceMappingURL=main.js.map