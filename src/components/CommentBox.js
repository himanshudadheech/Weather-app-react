import React, { Component } from "react";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      userComment: "",
    };
    this.postComment = this.postComment.bind(this);
  }
  //  use to display comment
  AddUserComment(e) {
    this.setState({ userComment: e.target.value });
  }
  //  use to push comment in comment array
  postComment() {
    if (this.state.userComment.length) {
      this.setState({
        userComment: "",
      });

      this.state.comments.push(this.state.userComment);
    }
  }
  render() {
    //  help to map all comment
    const allComments = this.state.comments.map((e) => (
      <p style={{ textAlign: "left" }}>
        <i class="bi bi-person-fill"></i> {e}
      </p>
    ));
    return (
      <div className="d-flex justify-content-center container">
        <div className="card  " style={{ width: "750px", height: "auto" }}>
          <div className="p-2">
            <textarea
              className="form-control"
              id="commentTextBox"
              rows="2"
              placeholder="Enter your comment here..."
              style={{ backgroundColor: "pink", color: "grey" }}
              value={this.state.userComment}
              onChange={(e) => this.AddUserComment(e)}
            ></textarea>
            <br />
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "indigo",
                color: "white",
                marginBottom: "10px",
              }}
              onClick={this.postComment}
            >
              Comment
            </button>

            <div
              className="card-title"
              style={{
                backgroundColor: "pink",
                color: "black",
                padding: "5px",
              }}
            >
              <br />
              <div style={{ background: "#f7f2ff", padding: "10px" }}>
                <p
                  style={{
                    textAlign: "left",
                    display: "block",
                    color: "rgb(80, 80, 80)",
                  }}
                >
                  <b>Comments ({allComments.length})</b>
                </p>
                <br />
                {/* Displaying all comment */}
                {allComments}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CommentBox;
