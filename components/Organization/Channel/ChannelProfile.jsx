"use client";
import React, { useMemo } from "react";
import RightContainer from "../../Layouts/RightContainer";
import Image from "next/image";
import { QuizLogo } from "../../Constants/imageContants";
import SecondaryBtn from "../../Helpers/SecondaryBtn";
import { stringShortener } from "@/lib/stringShortener";
import { BsSearch } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { channelProfileStore } from "@/store/channelProfileStore";
import { CgClose } from "react-icons/cg";

const ChannelProfile = () => {
  const showChannelProfile = channelProfileStore(
    (state) => state.showChannelProfile
  );
  const setShowChannelProfile = channelProfileStore(
    (state) => state.setShowChannelProfile
  );
  const channelUsers = useMemo(() => [
    {
      username: "Test User",
    },
    {
      username: "Test User",
      isAdmin: true,
    },
    {
      username: "Test User",
    },
    {
      username: "Test User",
    },
    {
      username: "Test User",
    },
    {
      username: "Test User",
    },
    {
      username: "Test User",
    },
    {
      username: "Test User",
    },
    {
      username: "Test User",
    },
    {
      username: "Test User",
    },
  ]);
  return (
    showChannelProfile && (
      <RightContainer>
        <div className="p-5 grid place-content-center place-items-center gap-2 shadow-md relative">
          <Image
            src={QuizLogo}
            className="w-24 h-24 rounded-full"
            alt="profile image"
          />
          <p className="font-semibold text-lg">Group Study</p>
          <p className="text-sm text-gray-500">3 participants</p>
          <CgClose
            className="w-6 h-6 absolute right-4 top-4 lg:cursor-pointer"
            onClick={() => setShowChannelProfile(false)}
          />
        </div>

        <div className="px-4 py-2 mt-4 shadow-md">
          <p className="text-sm text-gray-700 break-all">
            {stringShortener(
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus numquam sapiente dignissimos atque assumenda reiciendis nam, optio omnis obcaecati! Nemo nconeudichnufih?",
              100
            )}
          </p>
          <p className="text-gray-600 text-xs mt-2 italic">
            Channel created by Hardik Joshi, on 1/10/2023 at 14:21
          </p>
        </div>

        <div className="flex flex-col py-2 h-[calc(100vh-55vh)] lg:h-[calc(100vh-60vh)] shadow-md">
          <div className="rounded-full w-full relative p-4 z-50">
            <input
              type="text"
              className="h-10 w-full text-gray-600 outline-none border border-gray-200 rounded-full shadow-md p-4 pr-12 placeholder:text-sm"
              placeholder="Search participants"
            />
            <BsSearch className="h-6 w-6 absolute right-8 top-6 text-gray-500" />
          </div>
          <div className="p-4 overflow-scroll scrollbar-none ">
            {channelUsers.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-4 py-2 items-center relative"
                >
                  <div className="bg-[#c4f4ea] px-3 py-1 rounded-full shadow-md">
                    <p className="font-semibold text-center">A</p>
                  </div>
                  <p className="text-sm">{item.username}</p>
                  {item.isAdmin && (
                    <p className="text-sm italic absolute right-4">-Admin</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 lg:cursor-pointer p-4">
            <MdOutlineLogout className="text-red-600 w-6 h-6" />
            <p className="text-red-600">Leave Channel</p>
          </div>
          <div className="flex items-center gap-4 lg:cursor-pointer p-4">
            <MdOutlineLogout className="text-red-600 w-6 h-6" />
            <p className="text-red-600">Leave Organization</p>
          </div>
        </div>
      </RightContainer>
    )
  );
};

export default ChannelProfile;
