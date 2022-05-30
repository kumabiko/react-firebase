import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const Feed: React.FC = () => {
  return (
    <div>
      Feed
      <button onClick={() => auth.signOut()}>logout</button>
    </div>
  );
};

export default Feed;
