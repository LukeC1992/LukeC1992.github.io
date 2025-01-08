import { TamaguiProvider } from "tamagui";
import  config  from './tamagui.config';
import { View, Text } from "tamagui";
import { useState } from "react";
import Home from "./components/Home";
import Professional from "./components/Professional";
import Personal from "./components/Personal";
import Projects from "./components/Projects";

export default function App() {
  const [page, setPage] = useState<string>("home");
  let outlet;
  if (page === "home") outlet = <Home />;
  if (page === "professional") outlet = <Professional />;
  if (page === "personal") outlet = <Personal />;
  if (page === "projects") outlet = <Projects />;
  return (
    <TamaguiProvider config={config}>
      <View
        backgroundColor={"black"}
        width={"100vw"}
        height={"100vh"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <View
          backgroundColor="black"
          width="93%"
          height="90%"
          marginTop="$5"
          marginLeft="$5"
          marginRight="$5"
          borderWidth="$0.25"
          display="flex"
        >
          {outlet}
        </View>
        <View
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          width="80%"
        >
          <Text
            color={"$white05"}
            fontFamily="Alumni Sans Pinstripe"
            fontSize="1.5em"
            cursor="pointer"
            onPress={() => setPage("home")}
            animation="slow"
            hoverStyle={{
              color: "$white1",
              scale: 1.1,
            }}
          >
            Home
          </Text>
          <Text
            color={"$white05"}
            fontFamily="Alumni Sans Pinstripe"
            fontSize="1.5em"
            cursor="pointer"
            onPress={() => setPage("professional")}
            animation="slow"
            hoverStyle={{
              color: "$white1",
              scale: 1.1,
            }}
          >
            Professional
          </Text>
          <Text
            color={"$white05"}
            fontFamily="Alumni Sans Pinstripe"
            fontSize="1.5em"
            cursor="pointer"
            onPress={() => setPage("personal")}
            animation="slow"
            hoverStyle={{
              color: "$white1",
              scale: 1.1,
            }}
          >
            Personal
          </Text>
          <Text
            color={"$white05"}
            fontFamily="Alumni Sans Pinstripe"
            fontSize="1.5em"
            cursor="pointer"
            onPress={() => setPage("projects")}
            animation="slow"
            hoverStyle={{
              color: "$white1",
              scale: 1.1,
            }}
          >
            Projects
          </Text>
        </View>
      </View>
    </TamaguiProvider>
  );
}
