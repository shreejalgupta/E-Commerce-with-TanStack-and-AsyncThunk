import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../../../react Reux thunk/src/features/Auth/Slice/authThunk";
import { removeUser } from "../state/authSlice";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const loginClicked = (data) => {
    dispatch(loginThunk(data))
  }

  const signUpClicked = (data) => {
    console.log(data)
  }

  const logOut = () => {
    dispatch(removeUser())
    localStorage.removeItem('accessToken')
  }

  return {
    navigate,
    handleSubmit,
    errors,
    register,
    reset,
    loginClicked,
    logOut
  };
};
