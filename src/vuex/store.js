import axios from 'axios';
// import { createApp } from 'vue'
import Vuex from 'vuex'

// createApp.use(Vuex);
// создаем хранилище
let store = new Vuex.Store({
    // здесь хранятся массивы переменны итд
    state:{
        // в этом массиве будет полученные API c json-serve для продуктов
        products: [],
        // для корзины
        card:[]
    },
    // с помощью этого мы меняем состояние и данные но синхронно то есть по очереди
    mutations:{
        // получаем фун и обращаемся к state и полученым продуктам 
        SETTOSTATE:(state, products)=>{
        // заносим в массив продукты нами полученые из асихрона продкуты
         state.products=products
        },
        SETTOCARD:(state, product)=>{
            // создаем подсчет кол-ва товаров
            if (state.card.length){
                // ну выводим пока не узнаем
                let productQTY = false;
                // проходим массив
                state.card.map(function(item){
                    // если артиклы совпадают то выводим +1
                    if(item.article === product.article){
                        productQTY = true;
                        item.quantity ++
                    }
                }) 
                // если он остлася фолс то мы пушим товар
                if(!productQTY){
                    state.card.push(product)
                }
                // если нет то 
            }else{
                // отправка сразу в кард стат
                state.card.push(product);
                // console.log(product)
            }
        },
        SETPLUS:(state, index)=>{
            // увеличиваем по индексу
            state.card[index].quantity++
        },
        SETMINUS:(state, index)=>{
            if(state.card[index].quantity > 1){
                state.card[index].quantity--
            }
        },
        DELETECARD:(state, index)=>{
            state.card.splice(index, 1)
        }

    },
    // этот метод асинхрон
    actions:{
        // создаем запрос
        GET_PRODUCTS_API({commit}){
            // Обращаемся к API-jsonserve через AJAX запросы где лежат наши товары
            return axios('http://localhost:3000/products', {
                // метод получить
                method:"GET"
            })
            // получаем
            .then((products)=>{
                 // фун для мутации(эти продукты перенсти в мутацию) и сами данные прокидываем полученные данные .data чтобы json распарсить
                commit('SETTOSTATE', products.data);
                return products;
            })
            // если ошибка то выводим в консоль
            .catch((error)=>{
                console.log(error);
                return error;
            })
        },

        ADD_TO_CARD({commit}, product){
            commit('SETTOCARD', product);
        },

        MINUS({commit}, index){
            commit('SETMINUS', index);
        },
        PLUS({commit}, index){
            commit('SETPLUS', index)
        },
        DELETE_FROM_CARD({commit}, index){
            commit('DELETECARD', index)
        },
        
    },
    //  этот метод быстры доступ без лишнего получения
    getters:{
        // пишем что хотим получить из state
        PRODUCTS(state){
            return state.products;
        },
        // для корзины
        CARD(state){
            // console.log(state.card)
            return state.card;
        }
    }
});
// экспорт
export default store;

