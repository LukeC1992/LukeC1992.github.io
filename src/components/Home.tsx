import { Text, XStack, YStack, View } from "tamagui";
import "../App.css";

export default function Home() {
  return (
    <XStack justifyContent="space-between">
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
      </YStack>

      <YStack
        height="88vh"
        className="bio"
        justifyContent="flex-end"
        alignItems="flex-start"
        marginRight="$5"
      >
        <View marginBottom="$3">
          <Text
            fontFamily={"Special Elite"}
            color="$white11"
            paddingLeft={"2em"}
            animation="slow"
            hoverStyle={{ color: "$white1" }}
          >
            Through discipline
          </Text>
          <Text
            fontFamily={"Special Elite"}
            color="$white11"
            paddingLeft={"2em"}
            animation="slow"
            hoverStyle={{ color: "$white1" }}
          >
            and hard work.
          </Text>
        </View>
        <View marginBottom="$3" marginTop="$-0.5">
          <Text
            fontFamily={"Special Elite"}
            color="$white11"
            paddingLeft={"3em"}
            animation="slow"
            hoverStyle={{ color: "$white1" }}
          >
            Displaying a flair
          </Text>
          <Text
            fontFamily={"Special Elite"}
            color="$white11"
            paddingLeft={"3em"}
            animation="slow"
            hoverStyle={{ color: "$white1" }}
          >
            for creativity.
          </Text>
        </View>
        <View marginBottom="$3" marginTop="$-0.5">
          <Text
            fontFamily={"Special Elite"}
            color="$white11"
            paddingLeft={"4em"}
            animation="slow"
            hoverStyle={{ color: "$white1" }}
          >
            Challenging myself
          </Text>
          <Text
            fontFamily={"Special Elite"}
            color="$white11"
            paddingLeft={"4em"}
            animation="slow"
            hoverStyle={{ color: "$white1" }}
          >
            and others.
          </Text>
        </View>
        <View marginBottom="$3" marginTop="$-0.5">
          <Text
            fontFamily={"Special Elite"}
            color="$white11"
            paddingLeft={"5em"}
            animation="slow"
            hoverStyle={{ color: "$white1" }}
          >
            Holding kindness in
          </Text>
          <Text
            fontFamily={"Special Elite"}
            color="$white11"
            paddingLeft={"5em"}
            animation="slow"
            hoverStyle={{ color: "$white1" }}
          >
            high regard.
          </Text>
        </View>
      </YStack>
    </XStack>
  );
}
