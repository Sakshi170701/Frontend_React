import React,{useState} from 'react';
import './Card.Scss';
import Modal from './Modal';

const Card = ({ item }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleLearnMoreClick = () => {
      setModalOpen(true);
    };
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
    <div className="card">
      
      <img className="thumbnail" src={item.thumbnail.small} alt="Thumbnail" />
      <div className="learn-more" onClick={handleLearnMoreClick}>
          Learn More
        </div>
        <div className="dots">
    <div className="dot yellow"></div>
    <div className="dot blue"></div>
  </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <div className="author-details">
      <p className="author-name-role">{`${item.author.name}, ${item.author.role}`}</p>
      <p className="date">{formatDate(item.date)}</p>
             </div>
      
          
      {modalOpen && <Modal item={item} onClose={() => setModalOpen(false)} />}
       
    </div>
    
  );
};

export default Card;