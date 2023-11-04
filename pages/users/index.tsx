import React from "react";

import Image from "next/image";

import { useGetUser } from "@/repo/api-hooks/useGetUser";

function Users() {
  const { data: userData } = useGetUser(1, {});
  console.log(userData);
  return (
    <div>
      <h1 className="text-[#323B4B] font-medium text-2xl mb-11">User List</h1>

      <section className="w-full">
        <table className="w-full  text-[0.75rem]">
          <thead className="w-full bg-[#FAFBFC] text-left  text-[#4E5D78]">
            <tr className="w-full font-medium">
              <th
                scope="col"
                className="w-[10%] rounded-l-xl py-[1rem] pl-[3rem] text-left hidden md:block"
              >
                #ID
              </th>
              <th scope="col" className="w-[40%] py-[1rem] pl-[1rem]">
                USERS
              </th>
              <th
                scope="col"
                className="w-[40%] py-[1rem] pl-[1rem] hidden md:block"
              >
                EMAIL
              </th>
              <th
                scope="col"
                className="w-[10%] py-[1rem] pl-[1rem] rounded-r-xl"
              >
                OPTIONS
              </th>
            </tr>
          </thead>
          <tbody className="align-top">
            {userData?.data.map((user) => (
              <tr
                key={user.id}
                className=" items-center text-[#4E5D78] font-semibold"
              >
                <td className="ml-[3rem] align-middle h-full hidden md:block">
                  <p className=" text-center"> {user.id}</p>
                </td>
                <td className="py-[1rem] pl-[1rem]">
                  <div className="flex items-center space-x-5">
                    <Image
                      src={user.avatar}
                      width={60}
                      height={60}
                      alt="user image"
                      className="rounded-2xl"
                    />
                    <div>
                      <p>
                        {user.first_name} {user.last_name}
                      </p>
                      <p className=" break-all md:hidden">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-[1rem] pl-[1rem] h-full align-middle hidden md:block">
                  <p>{user.email}</p>
                </td>
                <td className="py-[1rem]  pl-[1rem]  h-full align-middle">
                  <button className="flex items-center space-x-1">
                    <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-700"></div>
                    <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-700"></div>
                    <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-700"></div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Users;
