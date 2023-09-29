import { View, Image, Text } from "react-native";
import React from "react";
import { BGImage, Logo } from "../assets";
import { getScreenWith } from "../utils/GetScreenDimensions";
import { LoginForm } from "../components";

const LoginScreen = () => {
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-96"
        style={{ width: getScreenWith }}
      />

      {/* Main View */}

      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6 space-y-6">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />
        <Text className="py-2 text-primaryText font-semibold">
          {" "}
          Wellcome Back 🥰
        </Text>
        <LoginForm type="login" />
      </View>
    </View>
  );
};

export default LoginScreen;
