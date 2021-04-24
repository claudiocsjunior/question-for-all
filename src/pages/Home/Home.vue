<template>
    <div>
        <dash-board>
              <template v-slot:content>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-5 border-right height-total pt-3">
                   <filters :dados="dados" v-on:filtrarQuestoes="filtrar"/>
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
                    <div v-if="questoes.length > 0">
                        <card-question v-for="(questao, index) in getQuestoesFiltradas" :key="index" :index="index" :question="questao" :dados="dados" :filtros="filtrosNivel" v-on:excluirQuestao="excluir"/>
                    </div>
                    <div v-if="questoes.length <= 0" class="d-flex align-items-center justify-content-center">
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
import CardQuestion from '../../components/CardQuestion/CardQuestion';

export default {
    name: "Home",
     components: {
        DashBoard,
        Filters,
        CardQuestion
    },
    created: function () {
        var bd = {
            tipos: [
               {"nome": "Objetiva"},
               {"nome": "Discursiva"},
            ], 
            alternativa: "",
            niveis: [
               {"nome": "Fundamental 1", "active" : false},
               {"nome": "Fundamental 2", "active" : false},
               {"nome": "Ensino Médio", "active" : false},
               {"nome": "Superior", "active" : false},
            ],
            areas: [
               {"nome": "Humanas", 
                "disciplinas": [
                    {"nome": "História", "active" : false},
                    {"nome": "Geografia", "active" : false},
                    {"nome": "Filosofia", "active" : false},
                    {"nome": "Sociologia", "active" : false}
                    ]
                },
                {"nome": "Ciências da Natureza", 
                "disciplinas": [
                    {"nome": "Fisica", "active" : false},
                    {"nome": "Quimica", "active" : false},
                    {"nome": "Biologia", "active" : false},
                    ]
                },
                {"nome": "Linguagens e Códigos", 
                "disciplinas": [
                    {"nome": "Português", "active" : false},
                    {"nome": "Inglês", "active" : false},
                    {"nome": "Espanhol", "active" : false},
                    {"nome": "Matematica", "active" : false},
                    ]
                },
            ]
        };

        var bdLocasStorage = localStorage.getItem("bd");

        if(bdLocasStorage === null || bdLocasStorage === undefined){
            localStorage.setItem("bd", JSON.stringify(bd));
            bdLocasStorage = localStorage.getItem("bd");
        }

        this.dados = JSON.parse(bdLocasStorage);

        var questoesLocasStorage = localStorage.getItem("questions");

        if(questoesLocasStorage === null || questoesLocasStorage === undefined){
            this.questoes = [];
        }else{
            this.questoes = JSON.parse(questoesLocasStorage);
        }

    },
    data(){
        return {
           questoes: [],
           dados: [],
           filtrosNivel: [],
           filtrosDisciplina: [],
        };
    },
    computed: {
        getQuestoesFiltradas: function () {
            if(this.filtrosNivel.length > 0 || this.filtrosDisciplina.length > 0){
                var newQuestoes = [];

                console.log(this.questoes[0].nivel);

                for(var i = 0; i < this.questoes.length; i++){
                    var adicionada = false;

                    for(var j = 0; j < this.filtrosDisciplina.length; j++){

                        if(this.questoes[i].disciplinas === this.filtrosDisciplina[j]){
                            newQuestoes.push(this.questoes[i]);
                            adicionada = true;
                        }
                    }

                    if(!adicionada){
                        for(var k = 0; k < this.filtrosDisciplina.length; k++){
                            console.log(this.dados.areas[this.questoes[i].area].disciplinas[this.questoes[i].disciplina].nome);


                            if(this.dados.areas[this.questoes[i].area].disciplinas[this.questoes[i].disciplina].nome === this.filtrosDisciplina[k]){
                                newQuestoes.push(this.questoes[i]);
                            }
                        }
                    }
                }

                return newQuestoes;
            }

            return this.questoes;
        }
    },
    methods:{
        redirectNewQuestion(){
            this.$router.push({ name: 'newQuestion' });
        },
        filtrar(filtros){
            this.filtrosNivel = filtros.filtros.niveis;
            this.filtrosDisciplina = filtros.filtros.disciplinas;
        },
        excluir(index){
            this.questoes.splice(index, 1);

            localStorage.setItem("questions", JSON.stringify(this.questoes));

            alert("Questão excluída com sucesso");
        }
    }
}
</script>

<style lang="css" src="./style.css">

</style>