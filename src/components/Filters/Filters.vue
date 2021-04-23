<template>
    <div>
        <form>
            <div>
                <h5>Nível</h5>
                <div v-for="(nivel, index) in niveis" :key="index" class="form-check ml-3 mb-1">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="nivel.value">
                    <label class="form-check-label" for="defaultCheck1">
                        {{ nivel.nome }}
                    </label>
                </div>
            </div>
            <div class="mt-4">
                <h5>Áreas do Conhecimento</h5>
                <div v-for="(area, index) in areas" :key="index" class="form-check ml-3 mb-1">
                        <div class="mt-4">
                        <h6>{{ area.nome }} </h6>
                        <div v-for="(disciplina, index) in area.disciplinas" :key="index" class="form-check ml-3 mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="disciplina.value">
                            <label class="form-check-label" for="defaultCheck1">
                                {{ disciplina.nome }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "Filters",
  data(){
        return {
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
    },
};
</script>