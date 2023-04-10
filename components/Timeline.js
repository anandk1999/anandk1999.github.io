import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import { border, Box, Heading } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

function Timeline() {
   const [timelineTop, setTimelineTop] = React.useState(0);
   const borderColor = useColorModeValue('black', 'white');
   const boxRef = React.useRef(null);

   function isAtEndOfPage() {
      if (typeof window === 'undefined') {
        return false; // not in browser environment
      }
      return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
    }
    
 
   React.useEffect(() => {
     const handleScroll = () => {
       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       setTimelineTop(scrollTop);
     };
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);

   React.useEffect(() => {
      const boxNode = boxRef.current;
      const boxWidth = boxNode.offsetWidth; // width in pixels
      const boxHeight = boxNode.offsetHeight; // height in pixels
      console.log(`Box dimensions: ${boxWidth}px x ${boxHeight}px`);
    }, []);

   // const mainlineDiv = document.getElementById('mainline');
   // const mainlineRect = mainlineDiv.getBoundingClientRect();
   // const mainlineBottom = mainlineRect.top+window.pageYOffset;

   return (
      <>
      <Box className="flex flex-col md:flex-row my-5 relative" ref={boxRef}>
      {isAtEndOfPage() ? <div
         id='mainline'
         className="line"
         style={{ bottom: boxRef.current ? boxRef.current.offsetHeight - timelineTop-(boxRef.current.offsetHeight-timelineTop) + 'px' : 'auto' }}
       />:<div
         id='mainline'
         className="line"
         style={{ bottom: boxRef.current ? boxRef.current.offsetHeight - timelineTop + 'px' : 'auto' }}
       />}
      <style>
        {`
        .OrderedList {
          position: relative;
        }
        .line {
          position: absolute;
          left: 0.95rem; /* adjust this value to fit your design */
          top: 0;
          bottom: 0;
          margin: auto;
          width: 0.25rem; /* adjust this value to fit your design */
          background-color: ${borderColor}; /* adjust this color to fit your design */
          transition: top 0.1s ease-out; /* adjust the transition timing to fit your design */
          z-index: -1;
        }
        
        `}
      </style>
       <Box className="w-full">
         {timeline.map((item) => (
           <TimelineItem
             key={item.title}
             year={item.year}
             title={item.title}
             duration={item.duration}
             details={item.details}
           />
         ))}
       </Box>
     </Box>
      </>
   );
 } 

export default Timeline;