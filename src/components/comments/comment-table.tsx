"use client";

import { Comment, GetAllComments } from "@/apollo/comments/GetAllComments";
import { useSuspenseQuery } from "@apollo/client";
import React from "react";

export default function CommentTable() {
  const { data } = useSuspenseQuery<{
    comments: {
      data: Comment[];
    };
  }>(GetAllComments, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="border-solid border-2 border-sky-500 rounded-md p-2 m-2">
      {data.comments.data.map(function(comment) {
        return (
          <div className="flex gap-10">
            <div className="flex-col">{comment.id}</div>
            <div className="flex-col">{comment.name}</div>
            <div className="flex-col">{comment.body}</div>
            <div className="flex-col">{comment.post.body}</div>
            <div className="flex-col">{comment.email}</div>
          </div>
        );
      })}
    </div>
  );
}
