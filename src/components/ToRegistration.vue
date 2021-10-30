<template>
    <div class="to-registration">
        <div class="to-registration__description">Заргестрируйтесь, если вы еще не сделали этого</div>
        <v-btn 
            class="to-registration__btn"
            rounded
            color="#423189"
            dark
        >Зарегистрироваться</v-btn>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.to-registration {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    padding: 20px;
}

.to-registration__description{
    color: grey;
    text-align: center;
}

</style>