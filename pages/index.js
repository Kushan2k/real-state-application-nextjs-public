import { Flex, Box } from "@chakra-ui/react"
import { fetchData, baseUrl } from "../utils/fetchData"
import Property from "../components/Property"
import Banner from "../components/Banner"

export default function Home({ forSale, forRent }) {
  return (
    <Box w={"full"}>
      <Banner
        text="Rent a Home"
        link="/search?purpose=for-rent"
        title1="Rest homes for"
        title2="everybody"
        discription="Lorem ipsum dolor sit amet consectetur,
          molestiae "
        btnName="Explore Rantigs"
        url="https://matterport.com/sites/default/files/images/Real%20Estate%20eBook%20-%20Blog%20post.png"
      />
      <Flex flexWrap={"wrap"} justifyContent="space-around" width="full">
        {forRent?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        url="https://thumbs.dreamstime.com/b/modern-real-estate-house-building-city-construction-concept-evening-outdoor-urban-view-homes-40083842.jpg"
        text="Buy a Home"
        link="/search?purpose=for-sale"
        title1="Find,Buy & own your"
        title2="Dream Home"
        discription="Lorem ipsum dolor sit amet. "
        btnName="Explore Buying"
      />
      <Flex flexWrap={"wrap"} justifyContent="space-around" width="full">
        {forSale?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  )
}

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
