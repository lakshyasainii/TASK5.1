import React, { useState } from 'react';
import Options from './/Options';
import Question from './Question';
import Article from './Article';
import './App.css';

function App() {
  const [postType, setPostType] = useState('question'); 

  const handlePostTypeChange = (newPostType) => {
    setPostType(newPostType);
  };

  return (
    <div className="App">
      <Options onPostTypeChange={handlePostTypeChange} />
      <div className="content">
        {postType === 'question' ? <Question /> : <Article />}
      </div>
    </div>
  );
}

export default App;