import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { avatars } from "../../utils/supports";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, sizes } from "../../themes";
import AvatarImg from "./AvatarImg";

const Avatar = ({ avatar, setIsOpenAvatarList }) => {
  return (
    <View className="w-full flex items-center justify-center relative my-2">
      <TouchableOpacity
        className="w-20 h-20 p-1 rounded-full border-2 border-primary relative"
        onPress={() => setIsOpenAvatarList(true)}
      >
        <AvatarImg avatar={avatar} />
        <View className="w-6 h-6 bg-primary rounded-full absolute bottom-0 right-0 flex items-center justify-center">
          <MaterialIcons
            name="edit"
            size={sizes.smIcon}
            color={colors.iconWhite}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
