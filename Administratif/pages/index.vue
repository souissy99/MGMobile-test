<template>
<div class="">
  <div class="w-full h-24 bg-blue-500">
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
            <el-input placeholder="Ajoutez un commentaire" v-model="desc"></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">Annuler</el-button>
              <el-button type="primary" @click="addTask()">Ajouter</el-button>
            </span>
          </el-dialog>
        </div>

        <div class="mt-6" v-for="(item, index) in alertes.data" :key="index" >
          <el-card class="">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <span class="text-xl font-bold">{{ item.title }}</span>
                <span class="">{{ item.date }}</span>
              </div>
              <span>{{ item.description }}</span>
            </div>
          </el-card>
        </div>
      </el-card>
    </div>
  </div>
  <div class="w-full h-24 bg-blue-500">
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

.content-card {
  border-radius: 50px;
}

.main-card {
  border-radius: 50px;
}

html {
  max-width: 100%;
}

</style>>
