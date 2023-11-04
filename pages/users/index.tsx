import React from "react";

function Users() {
  return (
    <div>
      <h1 className="text-[#323B4B] font-medium text-2xl mb-11">User List</h1>

      <section className="w-full">
        <table className="w-full  text-[0.75rem]">
          <thead className="w-full bg-[#FAFBFC] text-left  text-[#4E5D78]">
            <tr className="w-full font-medium">
              <th
                scope="col"
                className="w-[10%] rounded-l-xl py-[1rem] pl-[3rem] text-left "
              >
                #ID
              </th>
              <th scope="col" className="w-[40%] py-[1rem] pl-[1rem]">
                USERS
              </th>
              <th scope="col" className="w-[40%] py-[1rem] pl-[1rem]">
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
            <tr>
              <td className="ml-[3rem] flex items-center py-[1rem]">id</td>
              <td className="py-[1rem] pl-[1rem]">name</td>
              <td className="py-[1rem] pl-[1rem]">address</td>
              <td className="py-[1rem]  pl-[1rem] items-center">
                <button className="flex items-center space-x-1">
                  <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-700"></div>
                  <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-700"></div>
                  <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-700"></div>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Users;
