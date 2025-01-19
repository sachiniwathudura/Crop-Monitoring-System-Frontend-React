// @ts-ignore
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import FormField from "../components/form/FormField";
import { signInUser } from "../reducers/AuthSlice"; // Assuming you have a reducer for user authentication
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth); // Assuming the state has an auth slice

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/");
    }
  }, [authState.isAuthenticated, navigate]);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signInUser(credentials)); // Dispatch the signInUser action with the credentials
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="w-screen min-h-dvh flex justify-center items-center flex-col text-gray-800 mt-7 fixed">
      <div className="w-full max-w-[35rem] px-6 py-10 border-2 rounded-2xl bg-green-100 -mt-14">
        <h2 className="text-4xl font-bold text-center text-green-800 --tw-shadow-color: #86efac mb-4">Green Shadow (Pvt) Ltd</h2>
        <h3 className="text-2xl font-semibold text-black-500">Welcome..!</h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center py-4 gap-3 mb-3"
        >
          <FormField
            title="Username"
            name="username"
            value={credentials.username}
            handleInputChange={handleInputChange}
            error={authState.error}
          />

          <FormField
            title="Password"
            name="password"
            value={credentials.password}
            handleInputChange={handleInputChange}
            error={authState.error}
          />

          {authState.error && (
            <div className="text-red-500 text-center">
              <p>{authState.error}</p>
            </div>
          )}

          <div className="flex justify-center mt-3 space-x-2 w-1/2 max-w-[20rem]">
            <button
              type="submit"
              className="bg-green-500 w-full text-black px-4 py-2 rounded-md hover:bg-green-700 hover:text-white focus:ring-2 focus:ring-green-400 text-lg"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <p>
            Don't have an account?{" "}
            <button className="text-green-600 hover:bg-green-300 hover:text-black" onClick={navigateToSignUp}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
