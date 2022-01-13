import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  StatusBar,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import List from "./screen/List";

// Define the config

const config = {
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <StatusBar backgroundColor="transparent" translucent={true}/>
      <List />
    </NativeBaseProvider>
  );
}
