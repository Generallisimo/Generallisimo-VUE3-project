<template>
    <div class="s-card-item">
        <img class="s-card-item-img" :src="require('../assets/images/' + card_item_data.image)" alt="img">
        <div class="s-card-item_info">
            <p>{{ card_item_data.name }}</p>
            <p>{{ card_item_data.price }}</p>
            <p> {{ card_item_data.article }}</p>
        </div>
        <div class="s-card-item_quantity">
            <p>QTY:</p>
            <span>
                <!-- добавление и удаление -->
                <span class="quantity__btn" @click="minus">-</span>
                {{ card_item_data.quantity }}
                <span class="quantity__btn" @click="plus">+</span>
            </span>
        </div>
        <!-- Удаляем -->
        <button @click="deleteBtn">Delete</button>
    </div>
</template>
<script>
    export default{
        name:"s-card-item",
        props:{
            card_item_data:{
                type: Object,                
                default(){
                    return{}
                }
            }
        },
        data(){
            return{

            }
        },
        computed:{},
        methods:{
            // удалние и добалвние
            minus(){
                this.$emit("minus")
            },
            plus(){
                this.$emit("plus")
            },
            deleteBtn(){
                // обозначаем действие
                this.$emit("deleteBtn")
            }
        },
        mounted(){
            // добавляем ключ через set мы получаем реактивность то есть авт меняет данные от потока данных
            // 3 арг - 1 куда 2 ключ 3 кол-во
            // this.$set(this.card_item_data, 'quantity', 1)

        }
    }
</script>
<style lang="scss">
@import '../assets/style/style.scss';
    .s-card-item{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        &-img{
            max-width: 50px;
        }
        .quantity__btn {
            cursor: pointer;
        }
        .quantity__tools {
            user-select: none;
        }
    }

</style>