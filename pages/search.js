import { useState } from "react"
import { useRouter } from "next/router"
import { Box, Flex, Text, Icon } from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs"
import SearchFilters from "../components/SearchFilters"
import Property from "../components/Property"
import noResultImg from "../assets/images/noresults.webp"
import Image from "next/image"
import { baseUrl, fetchData } from "../utils/fetchData"

export default function Search({ properties }) {
  const [searchFilters, setSearchFilters] = useState(null)
  const router = useRouter()
  return (
    <Box>
      <Flex
        cursor={"pointer"}
        bg="gray.100"
        borderBottom={"1px"}
        borderColor="gray.200"
        p="2"
        fontWeight={"bold"}
        fontSize="lg"
        justifyContent={"center"}
        alignItems="center"
        onClick={() => setSearchFilters((prev) => !prev)}
      >
        <Text>Search & Filter here</Text>
        <Icon as={BsFilter} paddingLeft="2" m="2" />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize={"2xl"} p="4" fontWeight={"bold"}>
        Properties {router.query?.purpose}
      </Text>
      <Flex w="full" flexWrap={"wrap"} justifyContent="space-around">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent={"center"}
          alignItems="center"
          flexDirection={"column"}
          marginTop="5"
          marginBottom={"5"}
        >
          <Image src={noResultImg} width={400} alt="No Results" />
          <Text fontSize={"2xl"} marginTop="3">
            No Results Found!
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent"
  const rentF = query.rentFrequently || "yearly"
  const minprice = query.minprice || "0"
  const maxprice = query.maxprice || "1000000"
  const rommsmin = query.roomsmin || "0"
  const bathsmin = query.bathsmin || "0"
  const sort = query.sort || "price-desc"
  const areamax = query.areamax || "35000"
  const locationExternalIDs = query.locationExternalIDs || "5002"
  const categoryExtranalID = query.categoryExtranalID || "4"

  const data = await fetchData(
    `${baseUrl}/properties/list?purpose=${purpose}&locationExternalIDs=${locationExternalIDs}&categoryExtranalID=${categoryExtranalID}&bathsMin=${bathsmin}&rentFrequency=${rentF}&priceMin=${minprice}&priceMax=${maxprice}&roomsMin=${rommsmin}&sort=${sort}&areaMax=${areamax}`
  )

  return {
    props: {
      properties: data?.hits,
    },
  }
}
