import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKzKKgHs53ZT33hesxnjHsrfB99MmUzYw",
  authDomain: "mealstog.firebaseapp.com",
  projectId: "mealstog",
  storageBucket: "mealstog.appspot.com",
  messagingSenderId: "608555837323",
  appId: "1:608555837323:web:5c455d173879884342318e",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
