import { useContext } from "react"
import Image from "next/image"
import { Box, Flex, Icon } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa"

function ImageScrollbar({data}) {
  
  return (
    <ScrollMenu
      
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{overflow:'hidden'}}
    
    >
      {data.map(img => (
        <Box key={img.id} itemID={img.id} width='910px' overflow={'hidden'}>
          <Image placeholder="blue" alt="Img"
            sizes="(max-width:500px) 100px,(max-width):1023px 400px, 1000px"
            
            blurDataURL={img.url} width={1000} height={300} src={img.url} />

        </Box>
      ))}
    </ScrollMenu>
  )
}

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
    
    return (
      <Flex justifyContent={'center'} alignItems='center' margin={'2'}>
        <Icon
          as={FaArrowAltCircleLeft}
          onClick={() => { scrollPrev() }}
          fontSize='2xl'
          cursor={'pointer'}
        />

      </Flex>
    )
    
  }

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    
    return (
      <Flex justifyContent={'center'} alignItems='center' margin={'2'}>
        <Icon
          as={FaArrowAltCircleRight}
          onClick={() => { scrollNext() }}
          fontSize='2xl'
          cursor={'pointer'}
        />

      </Flex>
    )
    
  }

export default ImageScrollbar