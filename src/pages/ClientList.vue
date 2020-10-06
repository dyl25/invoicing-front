<template>
<h2>Clients</h2>

<p v-for="client in clients" :key="client.id">{{ client.name }}</p>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            clients: []
        }
    },

    mounted() {
        this.loadClients();
    },

    methods: {
        loadClients() {
            axios
            .get('http://localhost:8080/api/clients')
            .then(response => {
                console.log(response)
                this.clients = response
                })
                .cath()
        }
    }
}
</script>

