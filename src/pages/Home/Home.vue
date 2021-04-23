<template>
    <div>
        <dash-board>
              <template v-slot:content>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-5 border-right height-total pt-3">
                   <filters/>
                </div>
                <div class="col-xl-10 col-lg-9 col-md-8 col-sm-7 col-7 height-total">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">Questões</li>
                        </ol>
                    </nav>
                    <div class="d-flex flex-row-reverse">
                        <button type="button" class="btn btn-success" v-on:click.prevent="redirectNewQuestion">Nova Questão</button>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        Nenhuma questão disponível
                    </div>
                </div>
            </template>
        </dash-board>
    </div>
</template>

<script>

import DashBoard from '../../components/DashBoard/DashBoardComponent';
import Filters from '../../components/Filters/Filters';

export default {
    name: "Home",
     components: {
        DashBoard,
        Filters
    },
    data(){
        return {
           //OBJ
        };
    },
    methods:{
        redirectNewQuestion(){
            this.$router.push({ name: 'newQuestion' });
        }
    }
}
</script>

<style lang="css" src="./style.css">

</style>