import React from 'react'
function Article() {
    return (
        <>
        <div className="area">
          <label htmlFor="title-post">Title:</label>
          <input type="text" id="title-post" placeholder="Enter a 1-paragraph " />
        </div>
        <div className="area" id="articleForm">
          <label htmlFor="articletext">Abstract:</label>
          <br />
          <textarea rows={5} cols={50} id="abstractText" defaultValue={""} />
        </div>
        <div className="area" id="articleForm">
          <label htmlFor="questionText">Write article here:</label>
          <br />
          <textarea rows={10} cols={50} id="articleText" defaultValue={""} />
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