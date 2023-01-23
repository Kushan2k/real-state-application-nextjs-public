import { Box, Text, Flex, Spacer, Avatar } from "@chakra-ui/react"
import { FaBed, FaBath } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"
import { GoVerified } from "react-icons/go"
import millify from "millify"
import { baseUrl, fetchData } from "../../utils/fetchData"
import ImageScrollbar from "../../components/ImageScrollbar"

export default function PropertyDetails({ property }) {
  return (
    <Box maxWidth={"1000px"} margin="auto" p="4">
      {property.photos && <ImageScrollbar data={property.photos} />}
      <Box w="full" p="6">
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          paddingTop={"2"}
        >
          <Flex alignItems={"center"}>
            <Box paddingRight={"3"} color="green.300">
              {property.isVerified && <GoVerified />}
            </Box>
            <Text fontWeight={"bold"} fontSize="lg">
              AED {millify(property.price)}
              {property.rentFrequency && `/${property.rentFrequency}`}{" "}
            </Text>
          </Flex>
          <Box>
            <Avatar size={"sm"} src={property?.agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          p="1"
          alignItems={"center"}
          w="250px"
          color={"blue.400"}
        >
          {property.rooms}
          <FaBed />|{property.baths}
          <FaBath /> |{millify(property.area)}sqft <BsGridFill />
        </Flex>
        <Box marginTop={"2"}>
          <Text fontSize={"lg"} marginBottom="2" fontWeight={"bold"}>
            {property.title}
          </Text>
          <Text lineHeight={"2"} color="gray.600">
            {property.description}
          </Text>
        </Box>
        <Flex
          marginTop={"4"}
          flexWrap={"wrap"}
          textTransform="uppercase"
          justifyContent={"space-between"}
        >
          <Flex
            marginTop={"2"}
            justifyContent={"space-between"}
            borderColor="gray.100"
            w="full"
          >
            <Text>Type</Text>
            <Text fontWeight={"bold"}>{property.type}</Text>
          </Flex>
          <Flex
            marginTop={"2"}
            justifyContent={"space-between"}
            borderColor="gray.100"
            w="full"
          >
            <Text>Purpose</Text>
            <Text fontWeight={"bold"}>{property.purpose}</Text>
          </Flex>
          {property.furnishingStatus && (
            <Flex justifyContent={"space-between"} w="full" marginTop={"2"}>
              <Text>Furnishing Status</Text>
              <Text fontWeight={"bold"}>{property.furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {property.amenities.length && (
            <Text fontSize={"2xl"} fontWeight="black" marginTop={"5"}>
              Amenities
            </Text>
          )}
          <Flex flexWrap={"wrap"}>
            {property.amenities.map((am) =>
              am.amenities.map((am2) => (
                <Text
                  cursor={"pointer"}
                  fontWeight={"bold"}
                  color="blue.400"
                  fontSize={"11"}
                  p="2"
                  bg="gray.200"
                  m="2"
                  borderRadius={"5"}
                  key={am2.text}
                >
                  {am2.text}
                </Text>
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchData(`${baseUrl}/properties/detail?externalID=${id}`)

  return {
    props: {
      property: data,
    },
  }
}
