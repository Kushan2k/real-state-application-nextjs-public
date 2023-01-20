import Link from "next/link"
import Image from "next/image"
import {Flex,Box,Text,Avatar} from '@chakra-ui/react'
import defaultImg from '../assets/images/default.webp'

import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify"



function Property({property}) {
  return (
    <Link href={`/property/${property.externalID}`}>
      <Flex flexWrap={'wrap'} w='420px' p='5' paddingTop={'0'} justifyContent='flex-start'>
        <Box>
          <Image src={property.coverPhoto?property.coverPhoto.url:defaultImg} alt='House' width={400} height={260} />

        </Box>
        <Box w={'full'}>
          <Flex justifyContent={"space-between"} alignItems='center' paddingTop={'2'} >
            <Flex alignItems={"center"}>
              <Box paddingRight={'3'} color='green.300' >{property.isVerified && <GoVerified />}</Box>
              <Text fontWeight={'bold'} fontSize='lg'  >AED {millify(property.price)}{property.rentFrequency &&
                `/${property.rentFrequency}`} </Text>

            </Flex>
            <Box>
              <Avatar size={'sm'} src={property?.agency?.logo?.url}/>
            </Box>
            

          </Flex>
          <Flex justifyContent={'space-between'} p='1' alignItems={'center'} w='250px' color={'blue.400'}>
              {property.rooms}<FaBed />|{property.baths}<FaBath /> |{ millify(property.area)}sqft <BsGridFill/>

          </Flex>
          <Text fontSize={'ls'}>
            { property.title.length>30? `${property.title.substring(0,30)}...`:property.title}
          </Text>

        </Box>
      </Flex> 
    </Link>
  )
}

export default Property