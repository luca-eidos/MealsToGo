import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstog.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstog/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isIos = Platform.OS === "ios";
export const isAndroid = !isIos;
export const host = isDevelopment && isIos ? localHost : liveHost;
