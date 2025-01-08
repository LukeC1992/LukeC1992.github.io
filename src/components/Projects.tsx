import { XStack, YStack, Text, Image, Anchor } from "tamagui";
import { data } from "../assets/projects/data";
import { Github } from "@tamagui/lucide-icons";
import { useState } from "react";

export default function Projects() {
  const [project, setProject] = useState<string>("hauntbnb");
  let view = data.hauntbnb;
  if (project === "hauntbnb") view = data.hauntbnb;
  if (project === "epiphany") view = data.epiphany;
  return (
    <XStack width="100%" justifyContent="space-between">
      <YStack marginLeft="$4">
        <Text
          color="$white075"
          fontFamily="Alumni Sans Pinstripe"
          fontSize="4em"
          marginTop="$2"
          marginBottom="$-3"
          cursor="none"
        >
          Luke Cleveland
        </Text>
        <Text color="$white075" marginLeft="$1" cursor="none">
          Fullstack Engineer
        </Text>
        <Text
          color="$white075"
          marginLeft="$1"
          marginTop="$3"
          cursor="pointer"
          hoverStyle={{ color: "$green7" }}
          onPress={() => setProject("hauntbnb")}
        >
          Hauntbnb
        </Text>
        <Text
          color="$white075"
          marginLeft="$1"
          marginTop="$3"
          cursor="pointer"
          hoverStyle={{ color: "$green7" }}
          onPress={() => setProject("epiphany")}
        >
          Epiphany
        </Text>
      </YStack>
      <YStack marginTop="$6" flex={2}>
        <XStack
          className="pictures"
          gap="$4"
          marginBottom="$4"
          flex={1}
          justifyContent="space-around"
        >
          <Image
            opacity={1}
            enterStyle={{ opacity: 0 }}
            transition="opacity 1000ms ease-in 200ms"
            borderRadius="$4"
            source={{
              uri: view.image1,
              width: 550,
              height: 300,
            }}
          />
          <Image
            opacity={1}
            enterStyle={{ opacity: 0 }}
            transition="opacity 1000ms ease-in 200ms"
            borderRadius="$4"
            source={{
              uri: view.image2,
              width: 550,
              height: 300,
            }}
          />
        </XStack>
        <YStack
          marginLeft={100}
          marginRight={100}
          animation="slow"
          opacity={1}
          enterStyle={{ opacity: 0 }}
          transition="opacity 1000ms ease-in 500ms"
        >
          <Anchor href={view.gitlink}>
            <XStack alignItems="center" marginTop="$2" marginBottom="$1">
              <Text
                fontSize="4em"
                fontFamily="Alumni Sans Pinstripe"
                color="$white075"
                marginLeft="$1"
                hoverStyle={{ color: "$green7" }}
              >
                {view.name}
                <Github size={40} marginLeft="$2" marginTop="$1" />
              </Text>
            </XStack>
          </Anchor>
          <Text color="$white075" marginLeft="$1" marginTop="$2">
            {view.info}
          </Text>
        </YStack>
      </YStack>
    </XStack>
  );
}
