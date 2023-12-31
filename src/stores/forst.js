import { defineStore } from 'pinia'
import { getForstInfo  ,getForstData} from '../api/forest'
export const useForstData = defineStore("forstData", {
    state: () => ({ 
        forstInfo: [],
        queryInfo:[]
     }),
    getters: {},
    actions: {
        async getForstInfoMethod(startDate,endDate) {
            try {
                const { data } = await getForstInfo(startDate,endDate);
                console.log(data)
                this.forstInfo = data;
                return data
                
            } catch (error) {
                return Promise.reject(error.message);
            }
        },
        async getQueryForest(Region,heigh,pagesize,type) {
            try {
                const { data } = await getForstData(Region,heigh,pagesize,type);
                this.queryInfo = data;
                return data
                
            } catch (error) {
                return Promise.reject(error.message);
            }
        }

    }
});