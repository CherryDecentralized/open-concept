import React from 'react';
import Introduction from './Introduction';
import Definition from './Definition';
import VoteSection from './VoteSection';
import CommentsSection from './CommentsSection';

function Home() {
  return (
    <div>
      <Introduction />
      <Definition />
      <VoteSection />
      <CommentsSection />
    </div>
  );
}

export default Home;
