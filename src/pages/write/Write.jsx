import "./Write.css"

export default function Write() {
  return (
    <div className="write">
        <img
        className="writeImg"
        src="https://i0.wp.com/knowledgeenthusiast.com/wp-content/uploads/2020/04/pexels-photo-2379653.jpeg?fit=1880%2C1253&ssl=1" 
        alt="" />
        <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
        
  
}
