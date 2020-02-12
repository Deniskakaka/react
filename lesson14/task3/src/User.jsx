import React from "react";

function User({ match }) {
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={
          match.params.userId === "facebook"
            ? "https://lh3.googleusercontent.com/dkHvK43ThxbP69QBs6wNTnt_NLMmkNvr9pHiMusJnzgmAIB-KQc4AAakx3nbfHxcmw"
            : "https://avatars1.githubusercontent.com/u/9919?v=4"
        }
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">
          {match.params.userId}
        </span>
        <span className="user__location">
          {match.params.userId === "facebook"
            ? "Menlo Park, CA"
            : "San Francisco,CA"}
        </span>
      </div>
    </div>
  );
}

export default User;
