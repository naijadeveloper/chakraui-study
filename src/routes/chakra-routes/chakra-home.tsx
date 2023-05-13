import { Container, Box, Heading, Text } from "@chakra-ui/react";

export default function ChakraHome() {
  const boxStyles = {
    padding: "10px",
    backgroundColor: "purple.400",
    color: "white",
    margin: "10px",
    textAlign: "center",
    filter: "blur(.5px)",
    ":hover": {
      color: "blue.500",
      backgroundColor: "blue.200",
    },
  };
  return (
    <>
      <div className="min-h-screen">
        <Container as="section" maxWidth="4xl">
          <Heading display="inline-block" marginTop="30px" padding="10px">
            Chakra UI Components and Styling
          </Heading>
          <Text
            fontWeight="bold"
            color="blue.500"
            marginY={30}
            backgroundColor="blue.200"
            borderRadius="5px"
            padding="5px"
          >
            Something is wrong
          </Text>

          <Box my="30px" padding="20px" background="orange">
            <Text color="white">This is in a box</Text>
          </Box>

          <Box sx={boxStyles}>Hello, eChatter</Box>
        </Container>
      </div>
    </>
  );
}
