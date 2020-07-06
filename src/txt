import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Time = () => <span className="time">3h ago</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

// function LikeButton() {
//   return <i className="fa fa-heart like-button" />;
// }

//real

function Avatar() {
  return (
    <img
      src="https://media-exp1.licdn.com/dms/image/C5603AQEYXkY6AzWy7w/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=we7Y9KxqXcKyMa1oHtexzYqjcblNB3zQVxiPhD12NeA"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return (
    <div className="message">
      I'm a creative Front-end Developer with 3+ years of experience leveraging
      mark-up, js language with CMS to build responsive websites, and
      interactive features that drive business growth and improve UX.
    </div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Gàjí Fún rẹ́ ẹ (Pleasant Codes)</span>
      <span className="handle">@Pleasant_codes</span>
    </span>
  );
}

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet />, document.querySelector("#root"));

// https://www.gravatar.com/avatar/nothing
