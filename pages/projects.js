import { Container, Heading, SimpleGrid, Divider, Wrap } from '@chakra-ui/react'
import Section from '../components/section'
import WorkGridItem from '../components/grid-item'
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
            This is my personal website that I coded using NextJS and React
        </WorkGridItem>
        <WorkGridItem id="earphone" title="Earphone Detection" thumbnail={earphone} link="https://github.com/anandk1999/Earphone-Detection">
            Created a Python and AppleScript program that runs whenever I connect my wired earphones pauses the song i'm currently listening to when I take them off just like airpods.
        </WorkGridItem>
        <WorkGridItem id="voxel" title="Voxel ThreeJS" thumbnail={voxel} link="https://github.com/anandk1999/ThreeJSVoxelProject">
            Experimented with ThreeJS library and created my own voxel art and displayed it with orbit settings.
        </WorkGridItem>
      </Wrap>
   </Container>
)

export default Projects
