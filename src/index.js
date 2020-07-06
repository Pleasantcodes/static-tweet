import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

// const Time = () => <span className="time">3h ago</span>;
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

function Avatar({ hash }) {
  var url = `https://media-exp1.licdn.com/dms/image/C5603AQEYXkY6AzWy7w/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=we7Y9KxqXcKyMa1oHtexzYqjcblNB3zQVxiPhD12NeA/${hash}`;
  return (
    <img
      src="https://media-exp1.licdn.com/dms/image/C5603AQEYXkY6AzWy7w/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=we7Y9KxqXcKyMa1oHtexzYqjcblNB3zQVxiPhD12NeA"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

// add the { tweet } prop, destructured
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          61 Contents
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

// ....

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37",
};

ReactDOM.render(
  <Tweet tweet={testTweet} />,

  document.querySelector("#root")
);

// https://www.gravatar.com/avatar/nothing
