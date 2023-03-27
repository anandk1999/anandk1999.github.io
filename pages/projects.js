import { Container, Heading, SimpleGrid, Divider, Wrap, Box, Text, LinkBox, LinkOverlaym, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import Section from '../components/section'
import voxel from '../components/assets/voxel.png'
import earphone from '../components/assets/earphone.png'
import website from '../components/assets/website.png'

const Projects = () => (
   <Container>
      <Heading as="h1" variant="section-title" align="center" fontSize={50}>
        Projects
      </Heading>
      <Wrap spacing={6} justify="center" pt={5}>
        <WorkGridItem id="website" title="Personal Website" thumbnail={website} link="https://github.com/anandk1999/anandk1999.github.io">
          <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}/>
            This is my personal website that I coded using NextJS and React
        </WorkGridItem>
        <WorkGridItem id="earphone" title="Earphone Detection" thumbnail={earphone} link="https://github.com/anandk1999/Earphone-Detection">
          <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}/>
            Created a Python and AppleScript program that runs whenever I connect my wired earphones pauses the song i'm currently listening to when I take them off just like airpods.
        </WorkGridItem>
        <WorkGridItem id="voxel" title="Voxel ThreeJS" thumbnail={voxel} link="https://github.com/anandk1999/ThreeJSVoxelProject">
          <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}/>
            Experimented with ThreeJS library and created my own voxel art and displayed it with orbit settings.
        </WorkGridItem>
      </Wrap>
   </Container>
)

const WorkGridItem = ({ children, id, title, thumbnail, link }) => {
  const borderColor = useColorModeValue('black', 'white');
  return(
  <Box textAlign="center" border={`3px solid ${borderColor}`} padding={2} className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden" minHeight="300px" maxWidth="500px">
      <NextLink href={link} pl={2} passHref>
        <Heading mt={2} fontSize={25} as="h3" variant="section-title">
           {title}
        </Heading>
      </NextLink>
      <Text fontSize={14}>{children}</Text>
  </Box>
)
}

export default Projects
