import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const User = () => {
  const url = "https://randomuser.me/api/";
  const [user, setUser] = useState({});

  const getUser = () => {
    axios(url).then((res) =>
      setUser(res.data.results[0]).catch((err) => console.log(err))
    );
  };

  useEffect(() => {
    const sure = setInterval(getUser, 5000);

    getUser();

    return () => {
      console.log("timer durduruldu");
      clearInterval(sure);
    };
  }, []);

  console.log(user);
  const { name, email, picture, dob, location, phone } = user;

  return (
    <div>
      <img className="rounded-circle" src={picture?.large} alt="" />
      <p>Hi, my name is</p>
      <h1>
        {name?.first} {name?.last}
      </h1>
      <h3>{email}</h3>
      <h5>{dob?.date}</h5>
      <h6>{location?.city}</h6>
      <h6>{phone}</h6>
      <button className="btn btn-info" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
