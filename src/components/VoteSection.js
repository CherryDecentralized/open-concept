import React, { useState } from 'react';

function VoteSection() {
  const [vote, setVote] = useState('');

  const handleVote = (selectedVote) => {
    setVote(selectedVote);
    // Make API call to submit the vote to the backend
  };

  return (
    <div>
      <h2>Vote on Open Concept</h2>
      <p>Select your vote:</p>
      <div>
        <button onClick={() => handleVote('upvote')}>Upvote</button>
        <button onClick={() => handleVote('downvote')}>Downvote</button>
      </div>
      {vote && <p>You voted: {vote}</p>}
    </div>
  );
}

export default VoteSection;
