<template>
    <div class="s-catalog-item">
        <!-- чтобы не писать каждый раз v-bind можно ставить перед просто : -->
        <!-- указываем путь к файлам картинок, сейчаас мы в папке компоненты и как в линкусе мы просто через  .. поднимаемся выше  заходим в папку выше и из бд берем имя картинки-->
        <img class="s-catalog-item-img" :src=" require('../assets/images/' + product_data.image)" alt="img">
        <!-- передаем значения из бд -->
        <p class="s-catalog-item-name">{{ product_data.name }}</p>
        <p class="s-catalog-item-price">Price: {{ product_data.price }}</p>
        <!-- создаем обработчик -->
        <!-- <button class="s-catalog-item-add-btn btn" @click="sendDataToCard">Add to cart</button> -->
        <button class="s-catalog-item-add-btn btn" @click="addToCard">Add to cart</button>
    </div>
</template>
<script>
    export default{
        name:"s-catalog-item",
        // от родителя мы получаем данные 
        props:{
            product_data: {
                // указываем тип данных
                type: Object,
                // указываем состояние изначальное объекта и возвращаем пустой объект 
                default(){
                    return{}
                }
            }
        },
        data(){
            return{}
        },
        computed:{},
        // метод для обработчика
        methods:{
            addToCard(){
                // получаем полный продукт где первая это название для родителя и второе cам продукт emit указывает на действие
                this.$emit('addToCard', this.product_data)
            }
            // sendDataToCard(){
            //     // передаем родителю аритикул
            //     this.$emit('sendDataToCard', this.product_data.article)
            // }
        },
    }
</script>
<!-- указываем язык -->
<style lang="scss">
@import 'src/assets/style/style.scss'; 
    .s-catalog-item{
        // максимум ширина 25%
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        &-img{
            width: 100px;
        }
    }

</style>