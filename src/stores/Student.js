// creating a pinia store for student
import { defineStore } from 'pinia'

export const useStudentsStore = defineStore("student",{
    state: () => {
        return {
        students: [
           { id:1 , name:"Mahad" , age:22},
           { id:3 , name:"Ally" , age:9},
           { id:1 , name:"Khadija" , age:54},
        ],
        demo:"This is a demo data" 
        };
    },
    getters: {
    },
    actions: {

    },
});