// eslint-disable-next-line no-unused-vars
import React from "react";
import SideBar from "../../components/sidebar/sidebar";
import MessageContent from "../../components/messages/MessageContent";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />

      <MessageContent />
    </div>
  );
};

export default Home;
