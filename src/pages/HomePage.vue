<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-2 d-flex justify-content-between">
        <h3>What game will we play?!</h3>
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#add-game"
        >
          Add Game
        </button>
      </div>
    </div>
    <div class="row px-2">
      <div class="col-12 col-md-2 p-2" v-for="g in games" :key="g.id">
        <div class="text-center h-100">
          <h5>{{ g.title }}</h5>
          <img
            @click="goTo(g)"
            class="img-cover selectable"
            :src="g.image"
            :alt="g.title + ' image'"
          />
        </div>
      </div>
    </div>
  </div>
  <Modal id="add-game">
    <template #title>Add New Game</template>
    <template #body><AddGameForm /></template>
  </Modal>
</template>

<script>
import { computed, onMounted, watchEffect } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { loadState, saveState } from "../utils/LocalStorage";
import { router } from "../router";
export default {
  setup() {
    watchEffect(() => {
      loadState();
      // console.log(AppState.games);
    });
    return {
      games: computed(() => AppState.games),
      goTo(game) {
        AppState.activeGame = game;
        saveState();
        router.push({ name: "Game", params: { id: game.id } });
      },
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.img-cover {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}
</style>
