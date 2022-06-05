import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import TweetInput from "./TweetInput";

const Feed: React.FC = () => {
  return (
    <div>
      Feed
      <TweetInput />
      <button onClick={() => auth.signOut()}>logout</button>
    </div>
  );
};

export default Feed;
