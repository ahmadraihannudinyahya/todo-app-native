import React from "react";
import {
  NativeBaseProvider,
  StatusBar,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import List from "./screen/List";
import Detail from "./screen/Detail";

// Define the config

const config = {
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <StatusBar backgroundColor="transparent" translucent={true}/>
      {/* <List /> */}
      <Detail />
    </NativeBaseProvider>
  );
};
