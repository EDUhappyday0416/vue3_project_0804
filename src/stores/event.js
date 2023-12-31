import { defineStore } from 'pinia'
import { getForestInfo  } from '../api/forest'
export const useEventData = defineStore("eventData", {
    state: () => ({ 
        event: [
            {
                "date": "28 Dec",
                "imageUrl": "https://templated.co/items/demos/broadcast/images/pic07.jpg",
                "contents": [
                    {
                        "title": "Music Festival in Paris",
                        "time": "10:00PM",
                        "description": "An amazing festival with artists performing from all over the world.",
                        "price": "$3300"
                    },
                ]
            },
            {
                "date": "28 Dec",
                "imageUrl": "https://templated.co/items/demos/broadcast/images/pic08.jpg",
                "contents": [
                    {
                        "title": "Music Festival in Paris",
                        "time": "10:00PM",
                        "description": "An amazing festival with artists performing from all over the world.",
                        "price": "$3300"
                    },
                ]
            },
            {
                "date": "28 Dec",
                "imageUrl": "https://templated.co/items/demos/broadcast/images/pic01.jpg",
                "contents": [
                    {
                        "title": "Music Festival in Paris",
                        "time": "10:00PM",
                        "description": "An amazing festival with artists performing from all over the world.",
                        "price": "$3300"
                    },
                ]
            },
            {
                "date": "28 Dec",
                "imageUrl": "https://templated.co/items/demos/broadcast/images/pic07.jpg",
                "contents": [
                    {
                        "title": "Music Festival in Paris",
                        "time": "10:00PM",
                        "description": "An amazing festival with artists performing from all over the world.",
                        "price": "$3300"
                    },
                ]
            },
        ]
     }),
    getters: {},
    actions: {
        async getForestInfo(startDate,endDate) {
            try {
                const { data } = await getForestInfo(startDate,endDate);
                return data
                
            } catch (error) {
                return Promise.reject(error.message);
            }
        }
    }
});