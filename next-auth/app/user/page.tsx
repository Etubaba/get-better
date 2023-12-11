import { getSession } from "next-auth/react";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(options);
  return <div className="text-4xl font-bold">User page </div>;
};

export default page;
