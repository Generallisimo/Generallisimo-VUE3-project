<template>
    <div class="s-catalog">

        <!-- подключаем переход по ссылке указываем имя как прописали и вторым аргументов переносим массив как делали с тегами-->
        <router-link :to="{name: 'card'}">
            <!-- кол-во товаров в корзину length позваляет просто указать кол-во -->
            <div class="s-catalog-link-to-card">Card: {{ CARD.length }}</div>
        </router-link>
        <h1 style="margin: 0 auto;">Catalog</h1>
        <div class="s-catalog__list">

        <!-- рендарим наши данные из бдjson -->
        <!-- v-for - как цикл for перебираем массив созданный в data-->
        <!-- :key - идентифицирует каждый объект нужно указывать уникальный ключ в массиве -->
        <!-- с помощью v-bind мы связываем наш попс чтобы система создавала отдельный item -->
            <!-- <sCatalogItem 
                v-for="product in products" 
                :key="product.article" 
                v-bind:product_data="product"
                @sendDataToCard="showConsole"
                >

            </sCatalogItem> -->
            <!-- Способ с API -->
            <!-- подключаем все с store и mapActions -->
            <!-- add первый это фун из item при клике получаем продукт и выводим здесь к каждому товару -->

            <sCatalogItem 
                v-for="product in PRODUCTS" 
                :key="product.article" 
                v-bind:product_data="product"
                @addToCard="addToCard"
                >
            </sCatalogItem>
        </div>
    </div>
</template>
<script>
    // выводим каталог карточку
    import sCatalogItem from './s-catalog-item.vue';
    // вызываем для подключения фун из store js к компонентам
    import {mapActions, mapGetters} from 'vuex'
export default{
    name:"s-catalog",
    components:{
        sCatalogItem,
    },
    props:{},
    data(){
        return{
            // массив с ключами для вывода их на страницу из базы дб
//             products: [
//                 {
//                 image: "1.jpg",
//                 name: "T-shirt 1",
//                 price: 2100.234234234,
//                 article: "T1",
//                 available: true,
//                 category: "Мужские"
//                 },
//                 {
//                 image: "2.jpg",
//                 name: "T-shirt 2",
//                 price: 3150.12312412,
//                 article: "T2",
//                 available: true,
//                 category: "Женские"
//                 },
//                 {
//                 image: "3.jpg",
//                 name: "T-shirt 3",
//                 price: 4200.51524,
//                 article: "T3",
//                 available: false,
//                 category: "Женские"
//                 },
//                 {
//                 image: "4.jpg",
//                 name: "T-shirt 4",
//                 price: 5300.1245512,
//                 article: "T4",
//                 available: true,
//                 category: "Мужские"
//                 },
//                 {
//                 image: "5.jpg",
//                 name: "T-shirt 5",
//                 price: 6500.3522314,
//                 article: "T5",
//                 available: false,
//                 category: "Женские"
//                 },
//                 {
//                 image: "6.jpeg",
//                 name: "T-shirt 6",
//                 price: 8700.4124123,
//                 article: "T6",
//                 available: true,
//                 category: "Женские"
//                 }
//   ]
        }
    },
    computed:{
        // вызываем фун из store которая пишем вместо this.$store.state.products в цикле
        ...mapGetters([
            'PRODUCTS',
            'CARD'
        ]),
    },
    methods:{
        // обращаемся к фун для получения продуктов
        ...mapActions([
            'GET_PRODUCTS_API',
            'ADD_TO_CARD'
        ]),
        addToCard(data){
            this.ADD_TO_CARD(data);
        }

        // то что будет получать родитель и выводить вместо data
        // showConsole(data){
        //     console.log(data)
        // }
        
    },
    mounted(){
        // вызываем фун
        this.GET_PRODUCTS_API();
        
    }
}
</script>
<style lang="scss">
    .s-catalog{
        // так мы добавляем продолжение классу s-c и если есть s-c_l ниже &_l будет продолжение
        &__list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        &-link-to-card{
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 16px;
            border: solid 1px #aeaeae;
        }
    }
</style>