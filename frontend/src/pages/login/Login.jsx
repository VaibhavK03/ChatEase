import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-blue-500 pb-4">
          Login
          <span className="text-blue-500 p-2">ChatEase</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">
                Username:-
              </span>
            </label>
            <input
              type="text"
              autoComplete="on"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-black">
                Password:-
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="on"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="text-center">
            <Link
              to="/signup"
              className="text-base hover:underline hover:text-blue-600 mt-3 inline-block text-gray-900"
            >
              {"Don't"} have an account?
            </Link>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner">Loading...</span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//stater code for the file

// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-blue-500 pb-4">
//           Login
//           <span className="text-blue-500 p-2">ChatEase</span>
//         </h1>

//         <form action="">
//             <div>
//                 <label className="label p-2">
//                     <span className="text-base label-text text-black">Username:-</span>
//                 </label>
//                 <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//             </div>
//             <div>
//                 <label className="label">
//                     <span className="text-base label-text text-black">Password:-</span>
//                 </label>
//                 <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//             </div>

//           <div className="text-center">
//              <a href="#" className="text-base hover:underline hover:text-blue-600 mt-3 inline-block text-gray-900">
//             {"Don't"} have an account?
//          </a>
//        </div>

//             <div>
//                 <button className="btn btn-block btn-sm mt-2">Login</button>
//             </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
