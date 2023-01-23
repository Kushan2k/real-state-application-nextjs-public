import { useEffect, useState } from "react"
import { Flex,Box,Text,Input,Spinner,Icon,Button,Select } from "@chakra-ui/react"
import { useRouter } from "next/router"
import {MdCancel} from 'react-icons/md'
import Image from 'next/image'
import { filterData,getFilterValues } from "../utils/filterData"
import { baseUrl, fetchData } from "../utils/fetchData"

function SearchFilters() {

  const [locations,setlocations]=useState([])
  const [filters, setFilters] = useState(filterData)
  const [tearm, setTearm] = useState('abu dhabi')
  const [selected,setSelected]=useState('')
  const router = useRouter()


  const SearchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router

    const values = getFilterValues(filterValues)
    values.forEach(item => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name]=item.value
      }
    })
    router.push({pathname:path,query})
    
  }

  useEffect(() => {
    const getLoc=async() => {
      const data = await fetchData(`${baseUrl}/auto-complete?query=${tearm}`)
      console.log(data?.hits)
      setlocations(data?.hits)

    }
    getLoc()
  },[tearm])

  return (
    
    <Flex justifyContent={'center'} flexWrap='wrap' p='4' bg={'gray.100'}>
      {filters.map(filter => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w='fit-content'
            p='2'
          onChange={e=>SearchProperties({[filter.queryName]:e.target.value})}
          >
            {filter?.items?.map(item => (
              <option value={item.value} key={item.value}>{ item.name}</option>
            ))}
          </Select>
        </Box>
        
      ))}
      <Box w='max'>
          <Input bg='white' borderBottomWidth={1} borderBottomColor='black' onChange={(e)=>setTearm(e.target.value)} placeholder='Enter Your Tearm here.' value={tearm} />
          {locations && (
            <Select
              w='fit-content'
              p='2'
              onChange={(e) => {
                setSelected(e.target.value)

                router.push({
                  pathname: router.pathname,
                  query:`locationExternalIDs=${selected}`
                })
              }}
            
            >
              {locations.map(loc => (
                <option value={loc.externalID} key={loc.id}>{ loc.name}</option>
              ))}
            </Select>
            )}
        </Box>
    </Flex>
  )
}

export default SearchFilters