import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const LogIn = () => {
const { signIn } = useContext(authContext);
// console.log(signIn);

  const HandleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email);
    // console.log(password);
    // console.log(form);
    signIn(email,password)
    .then(result =>{
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
    })
    .catch(error =>{
        // console.log(error)
    })
  };
  return (
    <div className="">
      <div className="hero mt-14 py-10 bg-base-200 ">
        <div className="hero-content flex-col gap-16 ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link to='/register' className="mx-auto">
              <button className="btn  btn-ghost ">New to Khalammar Bari!!!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
