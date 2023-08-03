import React, { useState } from 'react';

function CommentsSection() {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    // Make API call to submit the comment to the backend
    setComment('');
  };

  return (
    <div>
      <h2>Comments and Feedback</h2>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
      ></textarea>
      <button onClick={handleCommentSubmit}>Submit Comment</button>
    </div>
  );
}

export default CommentsSection;
