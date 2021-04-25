<template>
  <div>
    <dash-board>
      <template v-slot:content>
        <div class="col-12 height-total">
          <div class="d-flex align-items-center justify-content-center mt-4 row">
            
            <div class="col-9 mt-4 d-flex justify-content-center">
              <h1>Noa Prova</h1>
            </div>

            <div class="col-9 mt-4 d-flex align-items-center">
              <label class="mb-0 mr-5">Título:</label>
              <input type="text" class="form-control"/>
            </div>

            <div class="col-9 mt-4 d-flex align-items-center">
              <label class="mb-0 mr-3">Descrição:</label>
              <textarea class="form-control rounded-0" rows="6"/>
            </div>

            <div class="col-9 mt-4 d-flex justify-content-end">
              <button type="button" class="btn btn-secondary">Questões adicionadas</button>
            </div>

            <div class="col-9 mt-4 d-flex justify-content-center">
              <h1>Incluir Questões</h1>
            </div>

            <div class="col-9 mt-4 d-flex align-items-center">
              <span class="badge bg-success text-light mr-2">Humanas</span>
              <span class="badge bg-primary text-light mr-2">História</span>
              <span class="badge bg-warning text-dark mr-2">Ensino médio</span>
              <span class="badge bg-danger text-light">Revolução industrial</span>
              <div class="col-9 d-flex justify-content-end">
                <label class="mr-2 mb-0">Incluir</label>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </div>
              </div>
            </div>

            <div class="col-9 mt-2 d-flex align-items-center">
              <textarea class="form-control rounded-0" rows="6"/>
            </div>

            <div class="col-9 mt-4 d-flex align-items-center">
              <label class="mb-0 mr-1"><strong>A)</strong></label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                  Alternativa A
                </label>
              </div>
            </div>

            <div class="col-9 mt-4 d-flex align-items-center">
              <label class="mb-0 mr-1"><strong>B)</strong></label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault1">
                  Alternativa B
                </label>
              </div>
            </div>

            <div class="col-9 mt-4 d-flex align-items-center">
              <label class="mb-0 mr-1"><strong>C)</strong></label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label" for="flexRadioDefault1">
                  Alternativa C
                </label>
              </div>
            </div>

            <div class="col-9 mt-4 d-flex align-items-center">
              <label>Mostrar Resposta</label>
            </div>

            <div class="col-9 mt-4 d-flex justify-content-between">
              <div class="col-9 d-flex justify-content-start" style="padding-left: 0px">
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click.prevent="toTests"
                >
                  Voltar
                </button>
              </div>
              <div>
                <button type="button" class="btn btn-warning mr-3">Gerar PDF</button>
                <button type="button" class="btn btn-success">Salvar</button>
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
    name: "ListTests",
     components: {
        DashBoard,
    },
    data(){
        return {
           //OBJ
        };
    },
    methods:{
      toTests(){
        this.$router.push({ name: 'tests' });
      },
    }
  }

</script>