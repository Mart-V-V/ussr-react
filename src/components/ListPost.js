import React from "react";
import Dates from "http://cms/apics/api-posts.php";
import { Link } from "react-router-dom";


export const ListPost = () => {
  return (
      <ul>
      {Dates?.map(date => (
        <li key={date.ID}>
            <Link to={`/react/post/${date.ID}`}>
                {date.post_title}
            </Link>
            {date.post_content}
        </li>
      ))}
      </ul>
  );
}
