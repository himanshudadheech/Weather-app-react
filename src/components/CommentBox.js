import React from "react";

export default function CommentBox() {
  var total_comment = 0;
  return (
    <div className="d-flex justify-content-center container" >
      <div className="card  " style={{ width: "750px", height: "auto" }}>
        <form className="p-2">
          <textarea
            className="form-control"
            id="commentTextBox"
            rows="2"
            placeholder="Enter your comment here..."
            style={{ backgroundColor: "pink", color: "grey" }}
          ></textarea>
          <br />
          <button
            type="submit"
            className="btn mb-2"
            style={{ backgroundColor: "indigo", color: "white" }}
          >
            Comment
          </button>
          <div
            className="card-title"
            style={{ backgroundColor: "pink", color: "black", padding: "5px" }}
          >
            <h6>Comments ({total_comment})</h6>
          </div>
        </form>
      </div>
    </div>
  );
}
