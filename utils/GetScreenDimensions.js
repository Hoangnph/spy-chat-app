import { Dimensions } from "react-native";

const getScreenWith = Math.round(Dimensions.get("window").width);
const getScreenHeight = Math.round(Dimensions.get("window").height);

export { getScreenWith, getScreenHeight };
