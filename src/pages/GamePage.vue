<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-2 d-flex justify-content-between">
        <button class="btn btn-primary" @click="newSession">New Session</button>
        <div class="text-center">
          <h2>{{ game.title }}</h2>
        </div>
        <i
          class="mdi mdi-pencil selectable text-warning me-4"
          title="Edit Game"
          data-bs-toggle="modal"
          data-bs-target="#edit-game"
        ></i>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <h6>Game Rules</h6>
        <p>{{ game.scoring }}</p>
      </div>

      <div class="col-12 col-md-6 bg-dark p-3">
        <h4>Game History</h4>
        <div
          @click="goTo(s.id)"
          class="rounded bg-white text-dark p-1 m-2 selectable"
          v-for="s in sessions"
          :key="s.id"
        >
          <Session :session="s" />
        </div>
      </div>
    </div>
  </div>
  <Modal id="edit-game">
    <template #title>Edit Game?</template>
    <template #body><EditGameForm /></template>
  </Modal>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { gamesService } from "../services/GamesService";
import { AppState } from "../AppState";
import { loadState, saveState } from "../utils/LocalStorage";
import { sessionsService } from "../services/SessionsService";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      loadState();
      AppState.activeGame = AppState.games.find((g) => g.id == route.params.id);
      // try {
      //   AppState.activeGame = await gamesService.getGameById(route.params.id)
      //   await sessionsService.getGamesSessions(route.params.id)
      //   await gamesService.getGames()
      // } catch (error) {
      //   logger.error(error)
      //   Pop.toast(error.message, 'error')
      // }
    });
    return {
      sessions: computed(() =>
        AppState.sessions.filter((s) => s.gameId == AppState.activeGame.id)
      ),
      game: computed(() => AppState.activeGame),
      // user: computed(() => AppState.user),
      goTo(id) {
        router.push({ name: "Session", params: { id: id } });
      },
      newSession() {
        try {
          const body = {
            gameId: AppState.activeGame.id,
          };
          const newSession = sessionsService.addSession(body);
          router.push({ name: "Session", params: { id: newSession.id } });
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>