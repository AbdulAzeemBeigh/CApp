// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import SearchInput from "./searchInput";
import Conversations from "./Conversations";
import LogOut from "./LogOut";

const sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="divider px-5"></div>
      <LogOut />
    </div>
  );
};

export default sidebar;
