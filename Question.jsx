import React from 'react'
function Questions() {
    return (
        <>
        <div className="subhead">
          <h2>What do you want to ask or share</h2>
        </div>
        
        <p> This section is designed based on the type of post. This could be developed by conditional rendering.</p>
        <div className="area">
          <label htmlFor="title-post">Title:</label>
          <input
            type="text"
            id="title-post"
            placeholder="Start your question with how, what, why etc."
          />

        </div>
        <div className="areas" id="questionForm">
          <label htmlFor="questionText">Describe your problem:</label>
          <br />
          <textarea rows={10} cols={50} id="questionText" defaultValue={""} />
        </div>
        <div className="area_footer">
          <label htmlFor="tags-post">Tags:</label>
          <input
            type="text"
            id="tags-post"
            placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          />
        </div>
        <div className="button">
          <button id="button-post" className="ui button primary">
            Post
          </button>
        </div>
      </>
      
    );
}

export default Questions;