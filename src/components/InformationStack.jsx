import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const InformationStack = ({ history }) => {
  const { title, imgUrl, description } = useParams();
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(description);
      setTexts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <img src={imgUrl} alt={title} style={{ width: '100%', height: 200 }} />
      <button className="button" onClick={handleGoBack}>
        <i className="material-icons">arrow_back</i>
      </button>
      <h1 className="title__img">Informacion</h1>
      {texts.map((text, index) => (
        <div className="cardBox" key={index}>
          <div className="content">
            <h2 className="title">{text.title}</h2>
            <p className="description">{text.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InformationStack;
