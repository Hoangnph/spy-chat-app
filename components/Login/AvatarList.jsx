import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  getScreenHeight,
  getScreenWith
} from "../../utils/GetScreenDimensions";
import { BlurView } from "expo-blur";
import { avatars } from "../../utils";
import AvatarImg from "./AvatarImg";

const AvatarList = ({
  avatarList,
  setAvatar,
  isOpenAvatarList,
  setIsOpenAvatarList
}) => {
  return (
    <View
      className="absolute inset-0 z-10 "
      style={{ width: getScreenWith, height: getScreenHeight }}
    >
      <ScrollView>
        <BlurView
          className="px-4 py-16 flex-row flex-wrap items-center justify-center"
          tint="light"
          intensity={40}
          style={{ width: getScreenWith, height: getScreenHeight }}
        >
          {avatarList?.map((avatar) => (
            <TouchableOpacity
              key={avatar._id}
              className="w-20 h-20 m-3 p-1 rounded-full border-2 border-primary relative"
              onPress={() => handleAvatar(avatar)}
            >
              <AvatarImg avatar={avatar.image.asset.url} />
            </TouchableOpacity>
          ))}
        </BlurView>
      </ScrollView>
    </View>
  );
  function handleAvatar(item) {
    setAvatar(item?.image.asset.url);
    setIsOpenAvatarList(false);
  }
};

export default AvatarList;
