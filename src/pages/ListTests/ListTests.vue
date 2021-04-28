<template>
  <div>
    <dash-board active="prova">
      <template v-slot:content>
        <div class="col-12 height-total">
          <div class="d-flex align-items-center justify-content-center mt-4 row">
            
            <div class="col-9 mt-4 d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-success"
                v-on:click.prevent="redirectNewTest"
              >
                Nova Prova
              </button>
            </div>
            
            <div class="col-9 mt-4 d-flex">
              <input type="text" class="form-control" placeholder="Pesquise aqui"/>
              <div class="d-flex ml-4">
                <button type="button" class="btn btn-primary">Buscar</button>
              </div>
            </div>
            
            <div class="card-group col-9 mt-4">
              <div class="card mr-5">
                <img src="../../assets/img-test.png" class="card-img-top" alt="imagem da prova">
                <div class="card-body">
                  <h5 class="card-title">Prova 1</h5>
                </div>
              </div>
              <div class="card mr-5">
                <img src="../../assets/img-test.png" class="card-img-top" alt="imagem da prova">
                <div class="card-body">
                  <h5 class="card-title">Prova 2</h5>
                </div>
              </div>
              <div class="card mr-5">
                <img src="../../assets/img-test.png" class="card-img-top" alt="imagem da prova">
                <div class="card-body">
                  <h5 class="card-title">Prova 3</h5>
                </div>
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
    methods: {
      redirectNewTest() {
        this.$router.push({ name: 'newTest' });
      }
    }
  }

</script>