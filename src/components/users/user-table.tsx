"use client";

import { GetAllUsers, User } from "@/apollo/user/get-all-users";
import { useSuspenseQuery } from "@apollo/client";
import React from "react";

export default function UserTable() {
  const { data } = useSuspenseQuery<{
    users: {
      data: User[];
    };
  }>(GetAllUsers, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="border-solid border-2 border-sky-500 rounded-md p-2 m-2">
      {data.users.data.map(function(user) {
        return (
          <div className="flex gap-10">
            <div className="flex-col">{user.id}</div>
            <div className="flex-col">{user.username}</div>
            <div className="flex-col">{user.website}</div>
          </div>
        );
      })}
    </div>
  );
}
