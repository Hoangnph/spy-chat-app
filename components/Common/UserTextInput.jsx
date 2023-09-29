import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { colors, sizes } from "../../themes";
import { validateEmail } from "../../utils/validateEmail";

const UserTextInput = ({ placeholder, isSecure, value, setValue, type }) => {
  const [iconName, setIconName] = useState(null);

  useLayoutEffect(() => {
    switch (type) {
      case "email":
        return setIconName("email");
      case "password":
        return setIconName("lock");
      case "fullname":
        return setIconName("person");
    }
  }, []);

  return (
    <View
      className={`border rounded-2xl px-4 py-4 flex-row items-center justify-between space-x-4 my-2 ${
        type === "email" && value.length > 0 && !validateEmail(value)
          ? "border-red-500"
          : "border-gray-200"
      }`}
    >
      <MaterialIcons
        name={iconName}
        size={sizes.inActive}
        color={colors.iconInActive}
      />
      <TextInput
        className="flex-1 text-base text-primaryText font-semibold pb-0.5 h-8"
        placeholder={placeholder}
        value={isSecure ? value.passValue : value}
        onChangeText={handleTextChange}
        secureTextEntry={isSecure && !value.isShowed}
        autoCapitalize="none"
      />

      {isSecure && (
        <TouchableOpacity onPress={handleViewEye}>
          <Entypo
            name={`${value.isShowed ? "eye-with-line" : "eye"}`}
            size={sizes.inActive}
            color={colors.iconInActive}
          />
        </TouchableOpacity>
      )}
    </View>
  );

  function handleTextChange(text) {
    setValue(text);
  }
  function handleViewEye() {
    setValue((prev) => ({ ...prev, isShowed: !prev.isShowed }));
  }
};

export default UserTextInput;
