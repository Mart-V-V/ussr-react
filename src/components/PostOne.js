import React from "react";
import { useParams } from 'react-router-dom';
import Dates from "../myfile.json";

export const PostOne = () => {

  const postId = useParams().id;

  const filtered = Dates.filter(item => {
    return item.ID === postId;
  });

  return (
      <div>
      {filtered.map(item => {
        return (
          <div key={item.ID}>
            <h1>{item.post_title}</h1>
            <p>{item.post_content}</p>
          </div>
        );
      })}
      </div>
  );
}