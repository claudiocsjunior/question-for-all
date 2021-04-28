<template>
    <div>
        <nav class="navbar navbar-light bg-light pt-3">
            <span class="navbar-brand mb-0 h1">Navbar</span>
            <ul class="nav  nav-tabs justify-content-end">
                <li class="nav-item">
                    <router-link :class="'nav-link ' + (active == 'questao' ? ' active ' : '') " to="/">Questões</router-link>
                </li>
                <li class="nav-item">
                    <a :class="'nav-link ' + (active === 'prova' ? ' active ' : '')" href="/provas">Provas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sair</a>
                </li>
            </ul>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <slot name="content"></slot>

                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DashBoard",
  props: ['active'],
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
    methods: {
    }
};
</script>

<style lang="css" src="./style.css">

</style>