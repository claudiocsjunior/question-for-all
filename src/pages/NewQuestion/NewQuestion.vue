<template>
    <div>
        <dash-board>
            <template v-slot:content>
                <div class="col-12 height-total">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item" aria-current="page">Questões</li>
                            <li class="breadcrumb-item active" aria-current="page">Criar</li>
                        </ol>
                    </nav>
                     <div class="d-flex align-items-center justify-content-center mt-4 row">
                       <div class="col-9 mt-4">
                            <label for="inlineFormCustomSelect">Área do conhecimento</label>
                            <select class="custom-select" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-9 mt-4">
                            <label for="inlineFormCustomSelect">Disciplinas</label>
                            <select class="custom-select" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-9 mt-4">
                            <label for="inlineFormCustomSelect">Nível Acadêmico</label>
                            <select class="custom-select" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>s
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-9 mt-4">
                            <label for="inlineFormCustomSelect">Conteudo</label>
                            <input type="text" class="form-control" placeholder="Conteudo">
                        </div>
                        <div class="col-9 mt-4">
                            <fieldset class="form-group">
                                <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Tipo da Questão</legend>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                                        <label class="form-check-label" for="gridRadios1">
                                            Objetiva
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                        <label class="form-check-label" for="gridRadios2">
                                            Discursiva
                                        </label>
                                    </div>
                                </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-9 mt-4">
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Enunciado</label>
                                <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="col-9 mt-4 mb-4">
                            <label for="inlineFormCustomSelect">Alternativas</label>
                            <input type="text" class="form-control mb-3" placeholder="Conteudo">
                            <input type="text" class="form-control" placeholder="Conteudo">

                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <button type="button" class="btn btn-success" v-on:click.prevent="redirectNewQuestion">Adicionar Alternativa</button>
                            </div>
                        </div>
                    </div>
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
    data(){
        return {
           //OBJ
        };
    },
    methods:{
        //methods
    }
}
</script>
