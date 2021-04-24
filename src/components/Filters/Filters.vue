<template>
    <div>
        <form>
            <div>
                <h5>Nível</h5>
                <div v-for="(nivel, index) in dados.niveis" :key="index" class="form-check ml-3 mb-1">
                    <input class="form-check-input" type="checkbox" value="" :id="'nivel' + index" v-model="nivel.value" v-on:input="filtrar(index, 0)">
                    <label class="form-check-label" :for="'nivel' + index">
                        {{ nivel.nome }}
                    </label>
                </div>
            </div>
            <div class="mt-4">
                <h5>Áreas do Conhecimento</h5>
                <div v-for="(area, index) in dados.areas" :key="index" class="form-check ml-3 mb-1">
                        <div class="mt-4">
                        <h6>{{ area.nome }} </h6>
                        <div v-for="(disciplina, index) in area.disciplinas" :key="index" class="form-check ml-3 mb-1">
                            <input class="form-check-input" type="checkbox" value="" :id="'disciplina' + area.nome + index" v-model="disciplina.value" v-on:input="filtrar(disciplina.nome, 1)">
                            <label class="form-check-label" :for="'disciplina' + area.nome + index">
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
    props: ['dados'],
    data(){
        return {
            filtros : {
                niveis: [],
                disciplinas: [],
            }
        };
    },
    methods:{
        filtrar(index, tipo){
            if(tipo === 0){
                var delIndex = this.filtros.niveis.indexOf(index);

                if (delIndex > -1) {
                    //alert("Encontrou no index " + delIndex + " e removeu");
                    this.filtros.niveis.splice(delIndex, 1);
                } else {
                    //alert("Não Encontrou e salvou");
                    this.filtros.niveis.push(index);
                }
            }else{
                var disNomeIndex = this.filtros.disciplinas.indexOf(index);
            
                if (disNomeIndex > -1) {
                    this.filtros.disciplinas.splice(disNomeIndex, 1);
                } else {
                    this.filtros.disciplinas.push(index);
                }
            }


            this.$emit('filtrarQuestoes', { filtros: this.filtros})
        },
    }
};
</script>