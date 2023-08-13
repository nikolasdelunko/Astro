import { createStore } from "nanostores";

const userPay = localStorage.getItem("userPay");

const initialState = {
  storyBook: {
    genre: {},
    theme: null,
    favoriteCharacter: null,
    timeOfSetting: null,
    placeOfSetting: null,
    amountCharacter: 0,
    pointOfView: null,
    conflict: null,
    plot: null,
    designPrompt: null,
    email: null,
  },
  toggle: 2,
  fill: false,
  pay: userPay === "true" ? true : false || false,
};

const helpersStore = createStore(initialState);

export const useHelpers = helpersStore.subscribe;

export function addGenre(payload) {
  helpersStore.update((state) => {
    state.storyBook.genre = {
      ...state.storyBook.genre,
      [state.toggle]: payload,
    };
    if (state.toggle === 1) {
      state.storyBook.genre = {};
    }
  });
}

export function addThemeStory(payload) {
  helpersStore.update((state) => {
    state.storyBook.theme = payload.ThemeOfStory;
  });
}

export function addStoryInfoStep2(payload) {
  helpersStore.update((state) => {
    const data = payload;
    state.storyBook.favoriteCharacter = data.FavoriteCharter;
    state.storyBook.timeOfSetting = data.TimeOfSettings;
    state.storyBook.placeOfSetting = data.PlaceOfSettings;
    state.storyBook.amountCharacter = data.AmountCharacter;
    state.storyBook.pointOfView = data.PointOfView;
    state.storyBook.conflict = data.Conflict;
    state.storyBook.plot = data.AutoPlot;
  });
}

export function addStoryInfoStep3(payload) {
  helpersStore.update((state) => {
    const data = payload;
    state.storyBook.designPrompt = data.CoverDesign;
  });
}

export function toggle() {
  helpersStore.update((state) => {
    const selected = state.toggle;
    if (selected > 1) {
      state.toggle = 0;
    } else {
      state.toggle = selected + 1;
    }
  });
}

export function clearToggle() {
  helpersStore.update((state) => {
    state.toggle = 2;
  });
}

export function addEmail(payload) {
  helpersStore.update((state) => {
    state.storyBook.email = payload;
  });
}

export function addFill(payload) {
  helpersStore.update((state) => {
    state.fill = payload;
  });
}

export function addPay(payload) {
  helpersStore.update((state) => {
    state.pay = payload;
    localStorage.setItem("userPay", payload);
  });
}

export default helpersStore;
