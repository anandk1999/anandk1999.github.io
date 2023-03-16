import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlaym, useColorModeValue, Heading } from '@chakra-ui/react'

const WorkGridItem = ({ children, id, title, thumbnail, link }) => {
   const borderColor = useColorModeValue('black', 'white');
   return(
   <Box textAlign="center" border={`3px solid ${borderColor}`} padding={2} className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden" minHeight="300px" maxWidth="500px">
       <Image
         src={thumbnail}
         alt={title}
         className="grid-item-thumbnail"
         placeholder="blur"
       />
       <NextLink href={link} pl={2} passHref>
         <Heading mt={2} fontSize={25} as="h3" variant="section-title">
            {title}
         </Heading>
       </NextLink>
       <Text fontSize={14}>{children}</Text>
   </Box>
 )
}

export default WorkGridItem