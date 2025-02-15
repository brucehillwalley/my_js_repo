"use client";
import GoBackButton from "@/components/GoBack";
// import { useParams } from "next/navigation";
import React from "react";

const UserDetail = ({ params }) => {
  //* client componentler için useParam() hooku kullanabiliriz
  // const {userId}= useParams()
  //   console.log(params);
  const { userId } = params;
  return (
    <div>
      <h1 className="text-2xl text-center">UserDetail</h1>
      <p>user - {userId}</p>
      <GoBackButton />
    </div>
  );
};

export default UserDetail;

export async function generateStaticParams() {
  const userArr = [1, 2, 3, 4];
  return userArr.map((userId) => ({ userId: userId.toString() }));
}
