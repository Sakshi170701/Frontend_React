import React from 'react';
import './Modal.Scss'
const Modal = ({ item, onClose }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return formattedDate;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <img className='thumbnail' src={item.thumbnail.large} alt=" Thumbnail" />
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <div className="author">
        {item.author.avatar && (
        <img src={item.author.avatar} alt="Author Avatar" />
        )}
        <div className="author-details">
        <p className="author-name-role">{`${item.author.name}, ${item.author.role}`}</p>
        <p className="date">{formatDate(item.date)}</p>
             </div>
        </div>  
         
      </div>
    </div>
  );
};

export default Modal;
