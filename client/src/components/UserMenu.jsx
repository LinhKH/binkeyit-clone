import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Divider from "./Divider";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { logout } from "../store/userSlice";
import { toast } from "sonner";
import AxiosToastError from "../utils/AxiosToastError";
import { HiOutlineExternalLink } from "react-icons/hi";
import isAdmin from "../utils/isAdmin";

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout,
      });
      console.log("logout", response);
      if (response.data.success) {
        if (close) {
          close();
        }
        dispatch(logout());
        localStorage.clear();
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      AxiosToastError(error);
    }
  };

  const handleClose = () => {
    if (close) {
      close();
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <div className="font-semibold">My Account</div>
      <div className="text-sm flex items-center gap-2">
        <span className="max-w-52 text-ellipsis line-clamp-1">
          {user.name || user.mobile}{" "}
          <span className="text-medium text-red-600">
            {user.role === "ADMIN" ? "(Admin)" : ""}
          </span>
        </span>
        <NavLink
          onClick={handleClose}
          to={"/dashboard/profile"}
          className={({ isActive }) =>
            `${isActive ? "bg-orange-200" : "hover:bg-orange-200"}`
          }
        >
          <HiOutlineExternalLink size={15} />
        </NavLink>
      </div>

      <Divider />

      <div className="text-sm grid gap-1">
        {isAdmin(user.role) && (
          <NavLink
            onClick={handleClose}
            to={"/dashboard/category"}
            className={({ isActive }) =>
              `px-2 py-1 ${isActive ? "bg-orange-200" : "hover:bg-orange-200"}`
            }
          >
            Category
          </NavLink>
        )}

        {isAdmin(user.role) && (
          <NavLink
            onClick={handleClose}
            to={"/dashboard/subcategory"}
            className={({ isActive }) =>
              `px-2 py-1 ${isActive ? "bg-orange-200" : "hover:bg-orange-200"}`
            }
          >
            Sub Category
          </NavLink>
        )}

        {isAdmin(user.role) && (
          <NavLink
            onClick={handleClose}
            to={"/dashboard/upload-product"}
            className={({ isActive }) =>
              `px-2 py-1 ${isActive ? "bg-orange-200" : "hover:bg-orange-200"}`
            }
          >
            Upload Product
          </NavLink>
        )}

        {isAdmin(user.role) && (
          <NavLink
            onClick={handleClose}
            to={"/dashboard/product"}
            className={({ isActive }) =>
              `px-2 py-1 ${isActive ? "bg-orange-200" : "hover:bg-orange-200"}`
            }
          >
            Product
          </NavLink>
        )}

        <NavLink
          onClick={handleClose}
          to={"/dashboard/myorders"}
          className={({ isActive }) =>
              `px-2 py-1 ${isActive ? "bg-orange-200" : "hover:bg-orange-200"}`
            }
        >
          My Orders
        </NavLink>

        <NavLink
          onClick={handleClose}
          to={"/dashboard/address"}
          className={({ isActive }) =>
              `px-2 py-1 ${isActive ? "bg-orange-200" : "hover:bg-orange-200"}`
            }
        >
          Save Address
        </NavLink>

        <button
          onClick={handleLogout}
          className="text-left px-2 hover:bg-orange-200 py-1"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
