"use client"
import GoBackButton from "@/components/GoBack";
import Link from "next/link";
import React from "react";

const Users = () => {
  const userArr = [1, 2, 3, 4];
  return (
    <div>
      <h1 className="text-2xl text-center">Users</h1>
      <nav className="flex flex-col p-2">
        {userArr.map((user) => (
          <Link
            className="underline"
            key={user}
            href={`/dashboard/users/${user}`}
          >
            Go user-{user}
          </Link>
        ))}
      </nav>
      <GoBackButton />
    </div>
  );
};

export default Users;
