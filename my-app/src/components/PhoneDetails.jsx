import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PhoneDetail = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/phones/${id}`).then(response => {
      setPhone(response.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{phone.name}</h1>
      <img src={`/assets/${phone.imageFileName}`} alt={phone.name} />
      <p>{phone.description}</p>
      <ul>
        <li>Manufacturer: {phone.manufacturer}</li>
        <li>Color: {phone.color}</li>
        <li>Price: ${phone.price}</li>
        <li>Screen: {phone.screen}</li>
        <li>Processor: {phone.processor}</li>
        <li>RAM: {phone.ram} GB</li>
      </ul>
    </div>
  );
};

export default PhoneDetail;
