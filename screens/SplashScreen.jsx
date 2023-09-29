import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useLayoutEffect } from "react";
import { Logo } from "../assets";
import { colors } from "../themes";
import {
  firebaseAuth,
  firebaseStoreDB
} from "../services/firebase/firebase.config";
import { useNavigation } from "@react-navigation/native";
import { getDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { SET_USER } from "../context/actions/userAction";

const SplashScreen = () => {
  useLayoutEffect(function () {
    const loginSuccess = checkLoggedUser();
    if (loginSuccess) {
      const interval = setTimeout(() => {
        navigation.replace("HomeScreen");
      }, 2000);
      return () => clearTimeout(interval);
    }
  }, []);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const checkLoggedUser = async () => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred?.uid) {
        console.log("User Cred: ", userCred);
        getDoc(doc(firebaseStoreDB, "users", userCred?.uid)).then((docSnap) => {
          if (docSnap.exists()) {
            console.log("User Data: ", docSnap.data());
            dispatch(SET_USER(docSnap.data()));
          }
        });
        return true;
      } else {
        console.log("User Cred: ", userCred);
        navigation.replace("LoginScreen");
      }
    });
  };

  return (
    <View className="flex-1 items-center justify-center space-y-24">
      <Image source={Logo} className="w-24 h-24" resizeMode="contain" />
      <ActivityIndicator size={"large"} color={colors.primary} />
    </View>
  );
};

export default SplashScreen;
