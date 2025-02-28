"use client";
import * as React from "react";
// import { useParams } from "next/navigation";

type Params = {
  id: string;
};

// https://nextjs.org/docs/messages/sync-dynamic-apis
// Next 15: APIs have been made asynchronous

export default function ProfilePage({ params }: { params: Params }) {
  const { id } = params; // React.use(params); // newer way
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile Page
        <span className="p-2 ml-2 rounded bg-orange-500 text-white">{id}</span>
        {/*  can not access directly {params.id} */}
      </p>
    </div>
  );
}
