import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";
import useGetLoggedInUser from "../../hooks/useGetLoggedInUser";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const {loggedInUser}= useGetLoggedInUser();

  return (
    
    <div className="flex flex-row ">
      <div className="mt-3">
        {!loading ? (
          <TbLogout2
            className="w-6 h-6 text-white cursor-pointer"
            onClick={logout}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </div>
      <div className="ml-3 mt-3 text-center font-semibold text-white">Logout, {loggedInUser.username}</div>
    </div>
  );
};

export default LogoutButton;
