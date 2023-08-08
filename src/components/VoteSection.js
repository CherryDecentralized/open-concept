import React, { useState } from 'react';
import classNames from 'classnames'; // Import classNames library
import './style/VoteSection.css';

function VoteSection() {
  const [vote, setVote] = useState('');

  const handleVote = (selectedVote) => {
    setVote(selectedVote);
    // Make API call to submit the vote to the backend
  };

  return (
    <div className="vote-section-container">
      <h2>Vote on Open Concept</h2>
      <p>Select your vote:</p>
      <div className="vote-buttons">
        <button
          className={classNames('vote-button', { 'vote-button-active': vote === 'upvote' })}
          onClick={() => handleVote('upvote')}
        >
          Upvote
        </button>
        <button
          className={classNames('vote-button', { 'vote-button-active': vote === 'downvote' })}
          onClick={() => handleVote('downvote')}
        >
          Downvote
        </button>
      </div>
      {vote && <p>You voted: {vote}</p>}
    </div>
  );
}

export default VoteSection;