import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/Store"
import FormField from "../components/form/FormField";
import { signUpUser } from "../reducers/AuthSlice";

export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/");
    }
  }, [authState.isAuthenticated, navigate]);

  const navigateToSignIn = () => {
    navigate("/login");
  };

  const [credentials, setCredentials] = useState({
    name: "",
    mobile: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signUpUser(credentials));
    if(!authState.error){
      navigate("/login");
    }
    // Dispatch the signUpUser action with the credentials
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center flex-col text-gray-800 bg-black">
      <div className="w-full max-w-[35rem] px-6 py-10 border-2 rounded-2xl bg-green-100 -mt-5 h-70%">
        <h1 className="text-3xl font-semibold text-center text-green-800 px-3 pt-5 ">Welcome Back !</h1>
        {/*<h2 className="text-2xl font-bold text-center text-green-800 px-3 ">Green Shadow (Pvt) Ltd</h2>*/}

        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center px-3 py-2 gap-3 mb-1 mt-1 mx-auto"

        >
          <FormField
              title="Mobile"
              name="mobile"
              value={credentials.mobile}
              handleInputChange={handleInputChange}
              error={authState.error}
          />

          <FormField
              title="Name"
              name="name"
              value={credentials.name}
              handleInputChange={handleInputChange}
              error={authState.error}
          />

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

          <FormField
              title="Confirm Password"
              name="cpassword"
              id="cpassword"
              value={credentials.cpassword}
              handleInputChange={handleInputChange}
              error={authState.error}
          />

          {authState.error && (
              <div className="text-red-500 text-center">
                <p>{authState.error}</p>
              </div>
          )}

          <div className="flex   space-x-2 w-1/2 max-w-[440px]">
            <button
                type="submit"
                className="bg-green-500 text-black-800 px-3 py-1 w-[440px] h-[35px] rounded-md text-align: center; hover:bg-green-700 hover:text-white
        border-2"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-2">
          <p>
            Already have an account?{" "}
            <button className="text-green-500 hover:text-black hover:bg-green-300" onClick={navigateToSignIn}>
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
