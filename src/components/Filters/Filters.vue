<template>
    <div>
        <form>
            <div>
                <h5>Nível</h5>
                <div v-for="(nivel, index) in dados.niveis" :key="index" class="form-check ml-3 mb-1">
                    <input class="form-check-input" type="checkbox" value="" :id="'nivel' + index" v-model="nivel.value">
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
                            <input class="form-check-input" type="checkbox" value="" :id="'disciplina' + area.nome + index" v-model="disciplina.value">
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
        };
    },
};
</script>