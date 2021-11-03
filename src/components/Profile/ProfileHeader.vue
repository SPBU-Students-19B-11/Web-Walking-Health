<template>
    <div class="header">
        <div class="header__name">
            {{ fullName }}
        </div>
        <button
            @click="$router.push('/')"
        >Выйти</button>
    </div>
</template>

<script>
    export default {
        props: {
            fullName: {
                required: true,
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
.header{
    background-color: #423189;
    border-radius: 0px 0px 20px 20px;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    &__name{
        color: #fff;
        font-size: 24px;
    }
}

button{
    background-color: #364759;
    color: white;
    padding: 10px;
    border-radius: 10px;

    &:hover{
        background-color: #FF5252;
    }
}
</style>