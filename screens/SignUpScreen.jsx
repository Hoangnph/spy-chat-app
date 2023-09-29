import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { BGImage, Logo } from "../assets";
import { getScreenWith } from "../utils/GetScreenDimensions";
import { Avatar, LoginForm, AvatarList } from "../components";
import { avatars } from "../utils/supports";

const SignUpScreen = () => {
  const [avatar, setAvatar] = useState(avatars[0]?.image.asset.url);
  const [isOpenAvatarList, setIsOpenAvatarList] = useState(false);

  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-96"
        style={{ width: getScreenWith }}
      />

      {isOpenAvatarList && (
        <AvatarList
          avatarList={avatars}
          setAvatar={setAvatar}
          isOpenAvatarList={isOpenAvatarList}
          setIsOpenAvatarList={setIsOpenAvatarList}
        />
      )}

      {/* Main View */}
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6 space-y-6">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />
        <Text className="py-2 text-primaryText font-semibold">
          {" "}
          Join with us ✋🏻
        </Text>

        {/* avatar section */}
        <Avatar avatar={avatar} setIsOpenAvatarList={setIsOpenAvatarList} />

        {/* Sign Up Form */}
        <LoginForm type="signup" avatar={avatar} />
      </View>
    </View>
  );
};

export default SignUpScreen;
