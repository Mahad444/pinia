<template lang="">
    <div>
        <h1>Students data</h1>
        <p>{{name}}</p>
        <p>{{studentsStore}}</p>
    </div>
</template>
<script>
    import { useStudentsStore } from "../stores/Student.js";
export default {
    setup() {
        let studentsStore = useStudentsStore();
        return { studentsStore };
    },
    data() {
        return {
            name: "Mahad",
        };
    },
    
}
</script>
<style lang="">
    
</style>