<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders en el programa </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(MissionCommander, index) in MissionCommanders"
          :key="index"
          @click="setActiveMissionCommander(MissionCommander, index)"
        >
          {{ MissionCommander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMissionCommander">
        <h4>Explorer</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMissionCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMissionCommander.username}}
          <br><label><strong>MainStack:</strong></label> {{ currentMissionCommander.mainStack}}
        </div>
        <router-link :to="'/MCs/' + currentMissionCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un explorer.</p>
      </div>
    </div>
  </div>
</template>
<script>

import missionCommanderService from "../services/missionCommanderService";

export default {
  name: "MissionCommanders-list",
  data() {
    return {
      tutorials: [],
      MissionCommanders: [],
      currentTutorial: null,
      currentMissionCommander: null,
      currentIndex: -1,
      title: "",
      MissionCommanderId: ""
    };
  },
  methods: {
    getAllMissionCommanders(){
      missionCommanderService.getAll()
        .then(response => {
          this.MissionCommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMissionCommander(MissionCommander, index) {
      this.currentMissionCommander= MissionCommander;
      this.currentIndex = MissionCommander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommanders();
  }
};
</script>
