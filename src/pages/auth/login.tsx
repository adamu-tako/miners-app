import { useState } from "react";
import { signIn } from "../../api";
import { useAppDispatch } from "../../store/hooks";
import { toggleToastOpen } from "../../store/slices/uiState";
import { useNavigate } from "react-router-dom";

interface LoginFormI {
  email: string;
  password: string;
  keepSignedIn: boolean;
}

const LoginPage = () => {
  const [loginForm, setLoginFOrm] = useState<LoginFormI>({
    email: "",
    password: "",
    keepSignedIn: true,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUpdateFormInput = (
    key: "email" | "password" | "keepSignedIn",
    value: string
  ) => {
    setLoginFOrm((prevInput) => {
      const inputCopy: LoginFormI = { ...prevInput, [key]: value };
      return inputCopy;
    });
  };

  const login = () => {
    signIn(loginForm)
      .then((data) => {
        const response = data;
        console.log(response);
        dispatch(
          toggleToastOpen({ label: "Login successfull", type: "SUCCESS" })
        );
        localStorage.setItem("Session", JSON.stringify(data.data));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        const response = err.response;
        console.log(response);
        dispatch(
          toggleToastOpen({ label: response.data.message, type: "ERROR" })
        );
      });
  };

  return (
    <>
      <section className="bg-white h-full md:bg-primary">
        <div className="flex items-center justify-center p-0 md:px-6 md:py-8 mx-auto md:h-screen lg:py-0">
          <div className="hidden md:block w-6/12">
            <h1 className="flex items-center mb-6 text-2xl font-semibold text-black">
              Logo
            </h1>
          </div>
          <div className="w-full md:w-6/12 mt-20 bg-white md:rounded-3xl md:shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 h-full md:h-[30rem] md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black">
                    Your email
                  </label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) =>
                      handleUpdateFormInput("email", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) =>
                      handleUpdateFormInput("password", e.target.value)
                    }
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        checked={loginForm.keepSignedIn}
                        onChange={(e) =>
                          handleUpdateFormInput("keepSignedIn", e.target.value)
                        }
                        className="w-4 h-4 border border-gray-300 rounded bg-primary focus:ring-3 focus:ring-primary-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-primary hover:text-decoration-line">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={login}
                  className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
