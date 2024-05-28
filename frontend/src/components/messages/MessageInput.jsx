// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoSendSharp } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Message here"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <IoSendSharp />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
