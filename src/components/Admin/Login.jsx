import React, { useState, useEffect } from "react";
import useAuth from "../../utils/customHooks/useAuth";
import { setPage } from "../../store/helpersStore";
// import { snackActions } from "../../utils/customHooks/useSnackBarUtils";

export default function Login() {
  const { login } = useAuth();
  // const dispatch = useDispatch();

  const [email, setName] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    setPage("admin")
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };
  const value = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(value);
    } catch (e) {
      // snackActions.error(e.response.data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[1024px] flex items-center justify-center flex-col bg-bg-main"
    >
      <div
        component="form"
        noValidate
        autoComplete="off"
        className="flex flex-col gap-[25px]"
      >
        <input
          className="w-[260px] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
          id="outlined-name"
          label="Name"
          value={email}
          required
          onChange={handleChange}
        />
        <input
          className="w-[260px] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
          type="password"
          id="Password"
          label="Password"
          value={password}
          required
          onChange={handleChangePass}
        />
      </div>
      <button
        variant="outlined"
        type="submit"
        disabled={false}
        className="btn mt-[25px]"
      >
        LOGIN
      </button>
    </form>
  );
}
