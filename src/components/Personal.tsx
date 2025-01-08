import { useState } from "react";
import { Text, XStack, YStack, Image } from "tamagui";
import husbandPic from "../assets/personal-info-panel/husband.jpg";
import musicianPic from "../assets/personal-info-panel/musician.jpg";
import gamesPic from "../assets/personal-info-panel/games.jpg";
import cookPic from "../assets/personal-info-panel/cook.jpg";
import horrorPic from "../assets/personal-info-panel/horror.jpg";

export default function Personal() {
  const [husband, setHusband] = useState<number>(0);
  const [musician, setMusician] = useState<number>(0);
  const [games, setGames] = useState<number>(0);
  const [cook, setCook] = useState<number>(0);
  const [horror, setHorror] = useState<number>(0);

  return (
    <XStack width="97%" justifyContent="space-between">
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
          cursor="pointer"
          marginLeft="$1"
          marginTop="$3"
          color="$white075"
          opacity={1}
          enterStyle={{ opacity: 0 }}
          hoverStyle={{color: '$green7'}}
          transition="opacity 500ms ease-in 500ms"
          onHoverIn={() => setHusband(1)}
          onHoverOut={() => setTimeout(() => setHusband(0), 1000)} 
        >
          Husband
        </Text>
        <Text
          cursor="pointer"
          marginLeft="$1"
          marginTop="$3"
          color="$white075"
          opacity={1}
          enterStyle={{ opacity: 0 }}
          hoverStyle={{color: '$green7'}}
          transition="opacity 500ms ease-in 1s"
          onHoverIn={() => setMusician(1)}
          onHoverOut={() => setTimeout(() => setMusician(0), 1000)}
        >
          Musician
        </Text>
        <Text
          cursor="pointer"
          marginLeft="$1"
          marginTop="$3"
          color="$white075"
          opacity={1}
          enterStyle={{ opacity: 0 }}
          hoverStyle={{color: '$green7'}}
          transition="opacity 500ms ease-in 1500ms"
          onHoverIn={() => setGames(1)}
          onHoverOut={() => setTimeout(() => setGames(0), 1000)}
        >
          Game Enthusiast
        </Text>
        <Text
          cursor="pointer"
          marginLeft="$1"
          marginTop="$3"
          color="$white075"
          opacity={1}
          enterStyle={{ opacity: 0 }}
          hoverStyle={{color: '$green7'}}
          transition="opacity 500ms ease-in 2s"
          onHoverIn={() => setCook(1)}
          onHoverOut={() => setTimeout(() => setCook(0), 1000)}
        >
          Home Cook
        </Text>
        <Text
          cursor="pointer"
          marginLeft="$1"
          marginTop="$3"
          color="$white075"
          opacity={1}
          enterStyle={{ opacity: 0 }}
          hoverStyle={{color: '$green7'}}
          transition="opacity 500ms ease-in 2500ms"
          onHoverIn={() => setHorror(1)}
          onHoverOut={() => setTimeout(() => setHorror(0), 1000)}
        >
          Horror Fan
        </Text>
      </YStack>
      <YStack flex={2}>
        <XStack marginTop="$8" marginLeft="$8" justifyContent="space-between">
          <Image
            opacity={husband}
            transition="opacity 1000ms ease-out 200ms"
            borderRadius="$4"
            source={{
              uri: husbandPic,
              width: 175,
              height: 700,
            }}
          />
          <Image
            
            opacity={musician}
            transition="opacity 1000ms ease-out 200ms"
            borderRadius="$4"
            source={{
              uri: musicianPic,
              width: 175,
              height: 500,
            }}
          />
          <Image
            marginTop={70}
            opacity={games}
            transition="opacity 1000ms ease-out 200ms"
            borderRadius="$4"
            source={{
              uri: gamesPic,
              width: 175,
              height: 500,
            }}
          />
          <Image
            marginTop={140}
            opacity={cook}
            transition="opacity 1000ms ease-out 200ms"
            borderRadius="$4"
            source={{
              uri: cookPic,
              width: 175,
              height: 500,
            }}
          />
          <Image
            marginTop={205}
            opacity={horror}
            transition="opacity 1000ms ease-out 200ms"
            borderRadius="$4"
            source={{
              uri: horrorPic,
              width: 175,
              height: 500,
            }}
          />
        </XStack>
      </YStack>
    </XStack>
  );
}
