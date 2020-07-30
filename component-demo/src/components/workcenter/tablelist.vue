<template>
    <div>
        <div v-for="item in this.tableData" :key="item.id">
            {{ item.addr }}
        </div>
    </div>
</template>

<script>
    export default({
        name:"workcenterbformtable",
        data() {
            return {
                tableData: []
            }
        },
        mounted () {
            this.loadtabledata();
        },
        methods: {
            loadtabledata() {
                // let port="19009"
                // let ip ="http://192.168.11.78"
                // this.$axios.get('http://192.168.11.78:19011/rulesengine/home/homeData?xmxxBsm=78').then((httpRes) => {
                this.$axios.get('/rulesengine/home/homeData?xmxxBsm=78').then((httpRes) => {
                // this.$axios.post(ip + ':'+port +'/activiti/process/proinstlist', this.form).then((httpRes) => {
                this.tableData = httpRes.data.Users;
                console.log("-------------");
                console.log(httpRes.data.Users);
                // this.total = httpRes.data.total;
        });
            }
        },
    })
</script>

<style scoped>

</style>