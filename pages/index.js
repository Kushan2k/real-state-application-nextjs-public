import Link from "next/link"
import Image from "next/image"
import { Flex, Button, Text, Box } from "@chakra-ui/react"
import { fetchData, baseUrl } from "../utils/fetchData"
import Property from "../components/Property"

export default function Home({ forSale, forRent }) {
  return (
    <Box w={"full"}>
      <h1>Homes</h1>
      <Banner
        text="Rent a Home"
        link="#"
        title1="Rest homes for"
        title2="everybody"
        discription="Lorem ipsum dolor sit amet consectetur,
          molestiae "
        btnName="Explore Rantigs"
        url="https://matterport.com/sites/default/files/images/Real%20Estate%20eBook%20-%20Blog%20post.png"
      />
      <Flex flexWrap={"wrap"} width="full">
        {forRent?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        url="https://thumbs.dreamstime.com/b/modern-real-estate-house-building-city-construction-concept-evening-outdoor-urban-view-homes-40083842.jpg"
        text="Buy a Home"
        link="#"
        title1="Find,Buy & own your"
        title2="Dream Home"
        discription="Lorem ipsum dolor sit amet. "
        btnName="Explore Buying"
      />
      <Flex flexWrap={"wrap"}>
        {forSale?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  )
}

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

export async function getStaticProps() {
  const sale = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  )
  const rent = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  )

  return {
    props: {
      forSale: sale?.hits,
      forRent: rent?.hits,
    },
  }
}
