import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";

const Button = ({ label, type, onPress }) => {
  const [btnStyle, setBtnStyle] = useState(null);
  const [btnLabelStyle, setLabelStyle] = useState(null);

  useLayoutEffect(() => {
    switch (type) {
      case "primary": {
        setBtnStyle(
          "w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center"
        );
        setLabelStyle("py-2 text-white text-xl font-semibold");
        return setBtnStyle, setLabelStyle;
      }
      case "text": {
        setBtnStyle("ml-2");
        setLabelStyle("text-base font-semibold text-primaryBold");
        return setBtnStyle, setLabelStyle;
      }
    }
  }, []);
  return (
    <TouchableOpacity className={`${btnStyle}`} onPress={onPress}>
      <Text className={`${btnLabelStyle}`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
