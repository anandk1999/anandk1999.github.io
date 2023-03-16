import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import { Box, Heading } from '@chakra-ui/react';

function Timeline() {
   return (
      <Box className="flex flex-col md:flex-row my-5">
         <Box className="w-full">
            {timeline.map(item => (
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </Box>
      </Box>
   )
}

export default Timeline;