import { Flex, Box, Text, Button } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

const Banner = (props) => (
  <Flex
    flexWrap={"wrap"}
    justifyContent="center"
    flexDirection={"row"}
    alignItems={"center"}
    m="10"
  >
    <Image src={props.url} width={500} height={300} alt="Banner Image" />
    <Box p="5">
      <Text fontSize={"sm"} color="gray.500" fontWeight={"medium"}>
        {props.text}
      </Text>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        {props.title1} <br />
        {props.title2}
      </Text>
      <Text
        fontSize={"lg"}
        paddingTop="3"
        paddingBlock={"3"}
        color="gray.700"
        fontWeight={"medium"}
      >
        {props.discription}
      </Text>
      <Button fontSize={"xl"}>
        <Link href={props.link}>{props.btnName}</Link>
      </Button>
    </Box>
  </Flex>
)

export default Banner