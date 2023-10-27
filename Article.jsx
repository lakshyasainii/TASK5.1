import React from 'react'
function Article() {
    return (
        <>
        <div className="subhead">
          <h2>What do you want to ask or share</h2>
        </div>
        
        <p> This section is designed based on the type of post. This could be developed by conditional rendering.</p>
        <div className="area">
          <label htmlFor="title-post">Title:</label>
          <input type="text" id="title-post" placeholder="Enter a descriptive title " />
        </div>
        <div className="areas" id="articleForm">
          <label htmlFor="articletext">Abstract:</label>
          <textarea rows={5} cols={50} id="title-pos" placeholder="Enter a 1 paragraph abstract " />
        </div>
        <div className="areas" id="articleForm">
          <label htmlFor="questionText">Article text:</label>
          <br />
          <textarea rows={10} cols={50} id="title-pos" placeholder="Enter a 1 paragraph abstract " />
        </div>
        <div className="area_footer">
          <label htmlFor="tags-post">Tags:</label>
          <input
            type="text"
            id="tags-post"
            placeholder="Please add up to 3 tags to describe what your question is about (e.g., Java)"
          />
        </div>
        <div className="button">
          <button id="button-post" className="button primary">
            Post
          </button>
        </div>
      </>
      
    );
}

export default Article;