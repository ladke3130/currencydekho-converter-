import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

export default function CTA() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 10 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <Text as={"span"} color={"#3967F6"}>
              CurrencyDekho Converter
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            <h1>
              Get fast and easy calculator for converting one currency to
              another using the latest live exchange rates.
            </h1>
          </Text>
        </Stack>
      </Container>
    </>
  );
}
