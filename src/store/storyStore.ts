import { atom, map, action } from "nanostores";

interface InitialState {
  toggle: number;
  fill: Boolean;
  pay: Boolean;
}


interface storyGenre {
  0?: string;
  2?: string;
}

interface storyInfo2 {
  favoriteCharacter: string;
  timeOfSetting: string;
  placeOfSetting: string;
  amountCharacter: number;
  pointOfView: string;
  conflict: string;
  plot: string;
}
export const storyGenre = atom<storyGenre>({});

export const storyInfo2 = atom<storyInfo2>({
  favoriteCharacter: "",
  timeOfSetting: "",
  placeOfSetting: "",
  amountCharacter: 0,
  pointOfView: "",
  conflict: "",
  plot: "",
});

export const designPrompt = atom<string>("");
export const email = atom<string>("");
export const storyBook = atom<string>("");

export const helpersStore = map<InitialState>({
  toggle: 2,
  fill: false,
  pay: false,
  // pay: userPay === "true" ? true : false || false,
});

// const helpersStore = createStore(initialState);

// export const useHelpers = helpersStore.subscribe;

export function addThemeStory(ThemeOfStory: string) {
  storyBook.set(ThemeOfStory);
}

export function addStoryInfoStep2(payload: any) {
  storyInfo2.set({
    ...storyInfo2.get(),
    favoriteCharacter: payload.FavoriteCharter,
    timeOfSetting: payload.TimeOfSettings,
    placeOfSetting: payload.PlaceOfSettings,
    amountCharacter: payload.AmountCharacter,
    pointOfView: payload.PointOfView,
    conflict: payload.Conflict,
    plot: payload.Plot,
  });
}

export function addStoryInfoStep3(DesignPrompt: string) {
  designPrompt.set(DesignPrompt);
}

export function addEmail(Email: string) {
  email.set(Email);
}

export function clearToggle() {
  helpersStore.setKey("toggle", 2);
}

export const toggle = action(helpersStore, "toggle", () => {
  const selected = helpersStore.get();
  if (selected.toggle > 1) {
    helpersStore.setKey("toggle", 0);
  } else {
    return helpersStore.setKey("toggle", selected.toggle + 1);
  }
});

export function addFill(options: boolean) {
  helpersStore.setKey("fill", options);
}

//! need Check what the user send

const userPay = localStorage.getItem("userPay");

export const addPay = action(
  helpersStore,
  "addPay",
  (data, payload: string | boolean) => {
    if (payload === true || userPay == "true") {
      helpersStore.setKey("pay", true);
      localStorage.setItem("userPay", JSON.stringify(payload));
    } else {
      helpersStore.setKey("pay", false);
      localStorage.setItem("userPay", JSON.stringify(false));
    }
  }
);

export const addGenre = action(storyGenre, "addGenre", (store, payload) => {
  const selected = helpersStore.get();
	storyGenre.set([selected.toggle] = payload);
	if (selected.toggle === 1) {
		storyGenre.set({});
	}
});

