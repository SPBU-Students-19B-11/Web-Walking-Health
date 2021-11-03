<template>
    <div>
        <div class="about">
            <div class="patients__header">Мои данные</div>
            <div class="patients__list">
                <v-card link>
                    <v-card-title>Иванов Сергей Иванович</v-card-title>
                    <v-card-subtitle>Обо мне</v-card-subtitle>
                </v-card>
            </div>
        </div>
        <div class="patients">
            <div class="patients__header">Мои паценты</div>
            <div class="patients__list">
                <div class="patients__item" v-for="id in 10" :key="id">
                    <v-card link @click="$router.push('/patient')">
                        <v-card-title>Иванов Иван Иванович</v-card-title>
                        <v-card-subtitle>О пациенте</v-card-subtitle>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.patients{
    &__header{
        margin: 16px;
        font-size: 24px;
    }

    &__list{
        margin: 0 5px 0 5px;
    }

    &__item{
        margin-bottom: 5px;
    }
}
</style>