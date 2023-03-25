import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/phones").then(response => {
      setPhones(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="sweet-loading">
        <ClipLoader color={"#123abc"} loading={loading} css={override} size={150} />
      </div>
    );
  }

  return (
    <div>
      <h1>Phone List</h1>
      <ul>
        {phones.map(phone => (
          <li key={phone.id}>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
