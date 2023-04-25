import React, { useContext } from 'react';
import  { authContext } from '../AuthProvider/AuthProvider';
import { getAuth } from "firebase/auth";
import App from '../../App';
import app from '../../firebase/firebase.config';
const auth = getAuth(app);
const Home = () => {
  const { user, createUser } = useContext(authContext);
  console.log(user);
  console.log(createUser);
    return (
      <div>
        <h1>The user is </h1>
        {
          user && <span>
            {user.Name}
          </span>
        }
      </div>
    );
};

export default Home;