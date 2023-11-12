import { atom, task, onMount } from "nanostores";
import { getUserByToken } from "../utils/Api/userApi";


export const isLogin = atom<boolean>(!!localStorage.getItem("userInfo") || false);
export const isLoading = atom<boolean>(false);
export const $data = atom<string | null>(localStorage.getItem("userInfo") || null);
export const error = atom<string | null>(null);


export const fetchUser = onMount($data, () => {
  task(async () => {
    try {
			isLoading.set(true)
			error.set(null)

      const response = await getUserByToken();

			$data.set((delete response.data.password, response.data))
			isLoading.set(false)
			error.set(null)
	
    } catch (err) {
      console.log("Trouble with auth, relogin please");
			localStorage.removeItem("userInfo");
			isLoading.set(false);
			error.set("Error happened while user data loading. Relogin plz")
    }
  });
});

export function setLogin(payload: boolean) {
	isLogin.set(payload)
}

export function setNewData(payload: string) {
	$data.set(payload)
	localStorage.setItem("userInfo", JSON.stringify(payload));
}

export function logOut() {
	$data.set(null)
	localStorage.removeItem("userInfo");
}

//! under old code


// export const fetchUser = action(async () => {
//   try {
//     initialState.update((state) => {
//       state.isLoading = true;
//       state.error = null;
//     });

//     const response = await getUserByToken();

//     userStore.update((state) => {
//       delete response.data.password;
//       state.data = response.data;
//       state.isLoading = false;
//       state.error = null;
//     });
//   } catch (error) {
//     console.log("Trouble with auth, relogin please");

//     userStore.update((state) => {
//       localStorage.removeItem("userInfo");
//       state.isLoading = false;
//       state.error = "Error happened while user data loading. Relogin plz";
//     });
//   }
// });

// const initialState = atom<State>({
//   data: JSON.parse(localStorage.getItem("userInfo")) || null,
//   error: null,
//   isLoading: false,
//   isLogin: !!JSON.parse(localStorage.getItem("userInfo")) || false,
// });
