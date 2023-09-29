import { TouchableOpacity, Image } from "react-native";
import React from "react";

const AvatarImg = ({ avatar }) => {
  return (
    <Image
      source={{ uri: avatar }}
      className="w-full h-full"
      resizeMode="contain"
    />
  );
};

export default AvatarImg;
