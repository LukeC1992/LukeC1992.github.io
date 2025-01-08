import { Github, Linkedin } from "@tamagui/lucide-icons";
import upwork from "../assets/upwork-icon.svg";
import { View, Text, YStack, XStack, Square, Anchor, Image } from "tamagui";

export default function Professional() {
  return (
    <View>
      <XStack className="container">
        <XStack width="97%" marginLeft="$4" justifyContent="space-between">
          <YStack flex={1}>
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
            <Text
              color="$white075"
              marginLeft="$1"
              cursor="none"
              marginBottom="$2"
            >
              Fullstack Engineer
            </Text>
            <Anchor href="mailto:Luke@Runeworks.studio">
              <Text
                marginLeft="$1"
                marginTop="$1"
                fontFamily="Alumni Sans Pinstripe"
                fontSize='$8'
                color="$white075"
                opacity={1}
                enterStyle={{ opacity: 0 }}
                transition="opacity 500ms ease-in 500ms"
                animation='slow'
                hoverStyle={{color: '$green7'}}
              >
                Luke@Runeworks.studio
              </Text>
            </Anchor>
            <YStack marginTop='$3'>
              <Square
                alignItems="flex-start"
                margin="$2"
                opacity={1}
                enterStyle={{ opacity: 0 }}
                transition="opacity 500ms ease-in 500ms"
              >
                <Anchor href="https://github.com/LukeC1992">
                  <Github size="$3" color="$white10" />
                </Anchor>
              </Square>
              <Square
                alignItems="flex-start"
                margin="$2"
                opacity={1}
                enterStyle={{ opacity: 0 }}
                transition="opacity 500ms ease-in 1000ms"
              >
                <Anchor href="https://www.linkedin.com/in/lukecleveland92/">
                  <Linkedin size="$3" color="$white10" />
                </Anchor>
              </Square>
              <Square
                alignItems="flex-start"
                margin="$2"
                opacity={1}
                enterStyle={{ opacity: 0 }}
                transition="opacity 500ms ease-in 1500ms"
              >
                <Anchor href="https://www.upwork.com/freelancers/~01d43c35ffa2077cd2">
                  <Image
                    source={{
                      uri: upwork,
                      width: 36,
                      height: 36,
                    }}
                  />
                </Anchor>
              </Square>
            </YStack>
          </YStack>
          <YStack>
            <Square
              alignItems="flex-end"
              opacity={1}
              enterStyle={{ opacity: 0 }}
              transition="opacity 500ms ease-in 500ms"
            >
              <Text
                textAlign="right"
                color="$white075"
                fontFamily="Alumni Sans Pinstripe"
                fontSize="4em"
                marginTop="$2"
                cursor="none"
              >
                Who
              </Text>
              <Text
                textAlign="right"
                color="$white075"
                cursor="cell"
                marginBottom="$2"
                fontFamily={"Special Elite"}
              >
                Hello, I am Luke Cleveland
                <br />
                I am 32 years old
                <br />
                Developer at Runeworks Studio
                <br />
                Web and Mobile Apps
                <br />
                Front End focused
                <br />
                Recent graduate from App Academy
                <br />
              </Text>
            </Square>
            <Square
              alignItems="flex-end"
              opacity={1}
              enterStyle={{ opacity: 0 }}
              transition="opacity 500ms ease-in 1000ms"
            >
              <Text
                textAlign="right"
                color="$white075"
                fontFamily="Alumni Sans Pinstripe"
                fontSize="4em"
                marginTop="$2"
                cursor="none"
              >
                Where
              </Text>
              <Text
                textAlign="right"
                color="$white075"
                cursor="cell"
                marginBottom="$2"
                fontFamily={"Special Elite"}
              >
                Born - Indianpolis, IN
                <br />
                Live - Greenwood, IN
                <br />
                Runeworks - Bloomington, IN
              </Text>
            </Square>
            <Square
              alignItems="flex-end"
              opacity={1}
              enterStyle={{ opacity: 0 }}
              transition="opacity 500ms ease-in 1500ms"
            >
              <Text
                textAlign="right"
                color="$white075"
                fontFamily="Alumni Sans Pinstripe"
                fontSize="4em"
                cursor="none"
              >
                What
              </Text>
              <Text
                textAlign="right"
                color="$white075"
                cursor="cell"
                marginBottom="$2"
                fontFamily={"Special Elite"}
              >
                HTML + CSS
                <br />
                Typescript
                <br />
                Javascript
                <br />
                Python
                <br />
                React
                <br />
                Tanstack
                <br />
                React-native
                <br />
                Expo
                <br />
                Tamagui
                <br />
                SQL
                <br />
                SQLite
                <br />
                Sequelize
                <br />
                Postgres
                <br />
              </Text>
            </Square>
          </YStack>
        </XStack>
      </XStack>
    </View>
  );
}
