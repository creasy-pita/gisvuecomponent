<template>
    <div>hello python
    </div>
</template>

<script>
    export default {
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
                this.tableData = httpRes.data.data;
                console.log("-------------");
                console.log(this.tableData);
                // this.total = httpRes.data.total;
        });
            }
        },
    }
</script>

<style scoped>

</style>