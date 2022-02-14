<template>
<div class="">
  <div class="w-full h-24 empty-div">
  </div>
  <div class="w-full flex flex-col">
    <div class="flex justify-center mt-6 mb-6">
      <el-card class="w-4/5 main-card">
        <span class="text-2xl">Administratif</span>
      </el-card>
    </div>
    <div class="flex justify-center mb-6">
      <el-card class="w-4/5 content-card">
        <div class="flex justify-end">
          <el-button type="primary" @click="dialogVisible = true" icon="el-icon-circle-plus-outline">Ajouter une alerte</el-button>
          <el-dialog
            title="Ajouter une alerte"
            :visible.sync="dialogVisible"
            width="30%">
            <el-input placeholder="Titre de l'alerte" v-model="title"></el-input>
            <el-input placeholder="Ajoutez un commentaire" class="mt-4" v-model="desc"></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">Annuler</el-button>
              <el-button type="primary" @click="addTask()">Ajouter</el-button>
            </span>
          </el-dialog>
        </div>

        <div class="mt-6" v-for="(item, index) in alertes.data" :key="index" >
          <el-card class="content-card">
            <div class="flex flex-col">
              <div class="grid justify-items-stretch">
                <span class="text-xl font-bold">{{ item.title }}</span>
                <span class="justify-self-end date">{{ item.date }}</span>
              </div>
              <span class="mt-4">{{ item.description }}</span>
            </div>
          </el-card>
        </div>
      </el-card>
    </div>
  </div>
  <div class="w-full h-24 empty-div">
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      dialogVisible: false,
      title: '',
      desc: '',
    }
  },

  computed: {
    ...mapState(['alertes']),
  },

  methods: {
    async fetchAlertes() {
      let res = await this.$store.dispatch("getAlertes");
      return this.res
    },

    async addTask() {
      if (this.desc.trim() === '' || this.title.trim() === '') {
        console.log("Veuillez remplir tout les champs svp.")
      }
      else {
        const title = this.title
        const desc = this.desc
        await this.$store.dispatch('addAlertes', {title, desc})
      }
    }
  },

  async mounted () {
    await this.fetchAlertes()
  },
};

</script>

<style lang="css">

.date {
  background-color: rgb(212, 212, 212);
  border-radius: 22px;
  color: #5D6BFF;
  padding: 8px;
}

.empty-div {
  background-color: #5D6BFF;
}

el-input {
  @apply mt-4
}

.el-button--primary {
  background-color: #5D6BFF;
  border-radius: 25px;
  border: 0px;
}

el-card {
  border-radius: 50px;
}

html {
  max-width: 100%;
}

</style>>
