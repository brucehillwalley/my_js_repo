import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/spinner.gif"

const PersonDetail = () => {
  const { idx } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

 
  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${idx}`)
      .then((res) => {
        if (!res.ok) {
          setLoading(false)
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false)
        setPerson(data.data)})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPerson();
  }, []);

  console.log(loading);
  
  if(loading){
return <div className="container text-center mt-4"><img src={spinner} alt="" /></div> 
  }else if (error) {
    return <NotFound />;
  } 
  else {
    return (
      <div className="container text-center mt-4">
        <img className="rounded" src={person?.avatar} alt="img" />
        <h6>
          {person?.first_name} {person?.last_name}
        </h6>
        <p>{person?.email}</p>
        <div>
          <button className="btn btn-warning me-3" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="btn btn-danger" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
