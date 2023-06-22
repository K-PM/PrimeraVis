import React from 'react';
import { Link } from 'react-router-dom';

const InformationCard = ({ title, imgUrl, description }) => {
    
  return (
    <Link
      to={{
        pathname: '/InformationStack',
        state: { title, imgUrl, description }
      }}
      style={styles.container}
    >
      <img src={imgUrl} style={styles.img} alt="" />
      <div style={styles.box}>
        <h3 style={styles.title}>{title}</h3>
        {console.log("titulo: ", title)}
      </div>
    </Link>
  );
};

export default InformationCard;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    marginBottom: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',

    ':hover': {
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    }
  },
  img: {
    width: '80px',
    height: '80px',
    marginRight: '10px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  box: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333'
  }
};
