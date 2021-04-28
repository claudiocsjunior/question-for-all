<template>
    <div>
        <dash-board active="questao">
            <template v-slot:content>
                <div class="col-12 height-total">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item" aria-current="page" v-on:click.prevent="toHome">Questões</li>
                            <li class="breadcrumb-item active" aria-current="page">Criar</li>
                        </ol>
                    </nav>
                     <form class="d-flex align-items-center justify-content-center mt-4 row">
                        <div class="col-9 mt-4" v-if="erros.length">
                            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                            <ul>
                                <div v-for="(erro, index) in erros" :key="index" class="alert alert-danger" role="alert">
                                    {{ erro }}
                                </div>
                            </ul>
                        </div>
                        <div class="col-9 mt-4">
                            <label for="niveis">Área do conhecimento</label>
                            <select v-model="newQuestion.area"  class="custom-select" id="niveis">
                                <option value="" selected>Selecione..</option>
                                <option v-for="(area, index) in dados.areas" :key="index" :value="index">{{area.nome}}</option>
                            </select>
                        </div>
                        <div class="col-9 mt-4">
                        <fieldset :disabled="newQuestion.area === ''">
                                <label for="inlineFormCustomSelect">Disciplinas</label>
                                <select v-model="newQuestion.disciplina"  class="custom-select" id="niveis" >
                                    <option value="" selected>Selecione..</option>
                                    <option v-for="(disciplina, index) in getDisciplinas" :key="index" :value="index">{{disciplina.nome}}</option>
                                </select>
                        </fieldset>
                        </div>
                        <div class="col-9 mt-4">
                            <label for="niveis">Nível Acadêmico</label>
                            <select v-model="newQuestion.nivel" class="custom-select" id="niveis">
                                <option selected>Selecione..</option>
                                <option v-for="(nivel, index) in dados.niveis" :key="index" :value="index">{{nivel.nome}}</option>
                            </select>
                        </div>
                        <div class="col-9 mt-4">
                            <label for="inlineFormCustomSelect">Conteudo</label>
                            <input v-model="newQuestion.conteudo" type="text" class="form-control" placeholder="Conteudo...">
                        </div>
                        <div class="col-9 mt-4">
                            <fieldset class="form-group">
                                <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Tipo da Questão</legend>
                                <div class="col-sm-10">
                                    <div class="form-check" v-for="(tipo, index) in dados.tipos" :key="index">
                                        <input v-model="newQuestion.tipo" class="form-check-input" type="radio" name="tipo" :id="'radio' + index" :value="index" :checked="newQuestion.tipo === index">
                                        <label class="form-check-label" :for="'radio' + index">
                                            {{ tipo.nome }}
                                        </label>
                                    </div>
                                </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-9 mt-4">
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Enunciado</label>
                                <textarea v-model="newQuestion.enunciado" class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>
                            </div>
                        </div>
                        <div v-if="newQuestion.tipo === 0" class="col-9 mt-4">
                            <label for="inlineFormCustomSelect">Alternativas</label>
                            <div v-for="(alternativa, index) in newQuestion.alternativas" :key="index" class="row">
                                <div class="col-1">
                                    {{ index+1 }}
                                </div>
                                <div class="col-9">
                                   {{ alternativa }}
                                </div>
                                <div class="col-2">
                                    <div class="d-flex flex-row-reverse p-1">
                                        <button type="button" class="btn btn-danger btn-sm" v-on:click.prevent="removerAlternativa(index)">remover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div v-if="newQuestion.tipo === 0" class="col-9 mt-4">
                            <label for="inlineFormCustomSelect">Nova Alternativa</label>
                            <div class="form-row">
                                <div class="col-9">
                                    <input v-model="alternativa" type="text" class="form-control mb-3" placeholder="Descrição alternativa...">
                                </div>
                                <div class="col-3">
                                    <div class="d-flex flex-row-reverse ">
                                        <button type="button" class="btn btn-primary" v-on:click.prevent="adicionarAlternativa">Adicionar Alternativa</button>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div class="col-9 mt-4">
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Resposta</label>
                                <textarea v-model="newQuestion.resposta" class="form-control rounded-0" id="resposta" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="col-9 mt-4 mb-4 mt-4">
                            <div class="form-row">
                                <div class="col-6">
                                    <div class="d-flex flex-row">
                                        <button type="button" class="btn btn-danger" v-on:click.prevent="toHome">Cancelar</button>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="d-flex flex-row-reverse">
                                        <button type="button" class="btn btn-success" v-on:click.prevent="addQuestion">Nova Questão</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </template>
        </dash-board>
    </div>
</template>

<script>

import DashBoard from '../../components/DashBoard/DashBoardComponent';

export default {
    name: "NewQuestion",
     components: {
        DashBoard,
    },
    created: function () {
        this.dados = JSON.parse(localStorage.getItem("bd"));
    },
    data(){
        return {
            dados:[],
            erros: [],
            newQuestion: {
                "nivel": "",
                "area": "",
                "disciplina": "",
                "conteudo": "",
                "tipo": 0,
                "enunciado": "",
                "resposta": "",
                "alternativas": []
            },
            alternativa: "",
        };
    },
    computed:{
        getDisciplinas: function () {
            console.log("area" + this.newQuestion.area);
            if(this.newQuestion.area !== ""){
                console.log("disciplinas" + this.dados.areas[this.newQuestion.area].disciplinas);
                return this.dados.areas[this.newQuestion.area].disciplinas;
            }
            return [];
        }
    },
    methods:{
        toHome(){
            this.$router.push({ name: 'Home' });
        },
        selectedArea() {
            this.selectArea = !this.selectArea;
        },
        adicionarAlternativa(){
            if(this.alternativa === ''){
                alert("Adicione a descrição da alternativa");
                return;
            }

            this.newQuestion.alternativas.push(this.alternativa);
            this.alternativa = "";
        },
        removerAlternativa(index){
            this.newQuestion.alternativas.splice(index, 1);
        },
        addQuestion(){
            
            this.erros = [];
            
            if(this.newQuestion.nivel === ''){
                this.erros.push("Selecione um nível")
            }

            if(this.newQuestion.area === ''){
                this.erros.push("Selecione uma área")
            }

            if(this.newQuestion.disciplina === ''){
                this.erros.push("Selecione uma disciplina")
            }

            if(this.newQuestion.conteudo === ''){
                this.erros.push("O conteúdo é obrigatório")
            }

            if(this.newQuestion.enunciado === ''){
                this.erros.push("O enunciado é obrigatório")
            }

            if(this.newQuestion.resposta === ''){
                this.erros.push("A resposta é obrigatória")
            }

            if(this.newQuestion.tipo === 0){
                if(this.newQuestion.alternativas.length <=1){
                    this.erros.push("É necessário adicionar ao menos 2 alternativas")
                }
            }


            if(this.erros.length > 0){
                return ;
            }

            var questions = localStorage.getItem("questions");

            if(questions === null || questions === undefined){
                questions = [];
            }else{
                questions = JSON.parse(questions);
            }

            questions.push(this.newQuestion);

            localStorage.setItem("questions", JSON.stringify(questions));

            this.toHome();
        }
    }
}
</script>
