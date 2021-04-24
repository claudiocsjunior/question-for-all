<template>
    <div class="mt-4">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <h5>Questão {{ index+1 }}</h5>
                <div class="dropdown">
                    <a href="" v-on:click.prevent="mostrarOptions">
                         <span>
                            <i class="fas fa-ellipsis-v"></i>
                        </span>
                    </a>
                    <div v-if="exibirOptions" class="dropdown-content">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <a href="" v-on:click.prevent="mostrarOptions">
                                    <li v-on:click="excluir(index)" class="list-group-item">Excluir</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="mb-4">
                    <span class="d-inline mr-1 badge badge-success"> {{ dados.areas[question.area].nome }} </span>
                    <span class="d-inline mr-1 badge badge-info"> {{ dados.areas[question.area].disciplinas[question.disciplina].nome }} </span>
                    <span class="d-inline mr-1 badge badge-warning"> {{ dados.niveis[question.nivel].nome }} </span>
                    <span class="d-inline mr-1 badge badge-danger"> {{ dados.tipos[question.tipo].nome }} </span>
                </div>
                <h6 class="card-subtitle mb-2 text-muted">Conteudo: {{ question.conteudo }}</h6>
                <p class="card-text">{{ question.enunciado }}</p>
                <div v-if="question.alternativas.length" class="mt-4">
                    <h6 class="card-subtitle mb-2 text-muted">Alternativas</h6>
                    <p class="card-text" v-for="(alternativa, index) in question.alternativas" :key="index">{{ index+1 }} - {{ alternativa }}</p>
                </div>
                <a href="#" class="card-link" v-on:click.prevent="mostrarResposta">Mostrar resposta</a>
                <blockquote v-if="exibirResposta" class="blockquote mb-0">
                    <footer class="blockquote-footer">{{ question.resposta }}</footer>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardQuestion",
    props: ['index', 'question', 'dados'],
    data(){
        return {
            exibirResposta: false,
            exibirOptions: false
        };
    },
    methods: {
        mostrarResposta(){
            this.exibirResposta = !this.exibirResposta;
        },
        mostrarOptions(){
            this.exibirOptions = !this.exibirOptions;
        },
        excluir(index){
            console.log(index);
            this.$emit('excluirQuestao', { index: index});

        }
    }
};
</script>

<style lang="css" src="./style.css">

</style>
