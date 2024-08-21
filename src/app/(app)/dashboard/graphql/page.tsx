import UserTable from "@/components/users/user-table";
import React, { Suspense } from "react";
import Loading from "./loading";
import CommentTable from "@/components/comments/comment-table";

export default function Page() {
  return (
    <div>
      {/* <Suspense fallback={<Loading />}> */}
      {/*   <UserTable /> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      {/*   <UserTable /> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      {/*   <UserTable /> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      {/*   <UserTable /> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      {/*   <UserTable /> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      {/*   <UserTable /> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      {/*   <UserTable /> */}
      {/* </Suspense> */}
      <hr />

      <Suspense
        fallback={
          <>
            <Loading />
            <span className="text-gray-700 text-center underline underline-offset-1">
              Loading comments...
            </span>
          </>
        }
      >
        <CommentTable />
      </Suspense>
    </div>
  );
}
