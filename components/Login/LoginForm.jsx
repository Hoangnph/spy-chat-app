import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import UserTextInput from "../Common/UserTextInput";
import Button from "../Common/Button";
import { useNavigation } from "@react-navigation/native";
import { validateEmail } from "../../utils/validateEmail";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  firebaseAuth,
  firebaseStoreDB
} from "../../services/firebase/firebase.config";
import { setDoc, doc, getDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";
import errorCodes from "../../utils/errorCodes";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../context/actions/userAction";
import { SplashScreen } from "../../screens";

const LoginForm = ({ type, avatar }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    passValue: "",
    isShowed: false
  });
  const [err, setErr] = useState("");
  useEffect(
    function () {
      if (err)
        Toast.show({
          type: "error",
          text1: err
        });
    },
    [err]
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View className="w-full flex items-center justify-center">
      {/* full name */}
      {type === "signup" && (
        <UserTextInput
          type="fullname"
          placeholder="Your full name"
          isSecure={false}
          value={fullName}
          setValue={setFullName}
        />
      )}
      {/* email */}
      <UserTextInput
        type="email"
        placeholder="Email"
        isSecure={false}
        value={email}
        setValue={setEmail}
      />
      {/* password */}
      <UserTextInput
        type="password"
        placeholder="Password"
        isSecure={true}
        value={password}
        setValue={setPassword}
      />
      {/* login button */}
      <Button
        label={type === "login" ? "Sign In" : "Sign Up"}
        type="primary"
        onPress={() => handleSubmit(type)}
      />
      {/* notice text */}
      <View className="w-full py-12 flex-row items-center justify-center space-x-2">
        <Text className="text-base text-primaryTexts">
          {type === "login" ? "Don't have an account?" : "Have an account?"}
        </Text>
        <Button
          label={type === "login" ? "Create Here" : "Sign In"}
          type="text"
          onPress={() => {
            type === "login"
              ? navigation.navigate("SignUpScreen")
              : navigation.navigate("LoginScreen");
          }}
        />
      </View>
    </View>
  );

  function handleSubmit() {
    switch (type) {
      case "login":
        handleSignIn();
        return;
      case "signup":
        handleSignUp();
        return;
    }
  }

  async function handleSignIn() {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCred) => {
        if (userCred) {
          getDoc(doc(firebaseStoreDB, "users", userCred?.user.uid)).then(
            (docSnap) => {
              if (docSnap.exists()) {
                console.log("User data: ", docSnap.data());
                dispatch(SET_USER(docSnap.data()));
              }
            }
          );
        }
      })
      .then(() => {
        navigation.replace("SplashScreen");
      })
      .catch((error) => {
        setErr(errorCodes(error.code));
      });
  }

  async function handleSignUp() {
    if (validateEmail(email) && email !== "" && password !== "") {
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCred) => {
          console.log(userCred?.user);
          const userData = {
            _id: userCred?.user.uid,
            userName: fullName,
            profilePic: avatar,
            providerData: userCred?.user.providerData[0]
          };
          // put data to firebase cloud store
          setDoc(
            doc(firebaseStoreDB, "users", userCred?.user.uid),
            userData
          ).then(() => {
            navigation.navigate("LoginScreen");
          });
        })
        .catch((error) => {
          setErr(errorCodes(error.code));
        })
        .finally(() => {
          setEmail("");
          setPassword({ passValue: "", isShowed: false });
          setFullName("");
        });
    }
  }
};

export default LoginForm;
