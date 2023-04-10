import { useColorMode } from '@chakra-ui/react';
import { OrderedList, List, ListItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import { useState, useEffect } from 'react';

function TimelineItem({ year, title, duration, details }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [timelineTop, setTimelineTop] = useState(0);
  const [eventTop, setEventTop] = useState(0);

  useEffect(() => {
    const myDiv = document.getElementById(`${title}`);
    if (myDiv) {
      const rect = myDiv.getBoundingClientRect();
      const y = rect.top+window.pageYOffset;
      // setEventTop(y);
    }

    const getTopPosition = (element) => {
      if(element){
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop;
      }
    }
    
    // usage
    const element = document.getElementById('my-element');
    const topPosition = getTopPosition(element);
    setEventTop(topPosition)

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setTimelineTop(scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const circleSize = (timelineTop >= eventTop) ? '15' : '3';

  return (
    <OrderedList className={`flex flex-col md:flex-row relative border-l ${isDark ? 'dark:border-white' : 'border-stone-900' }`}>
      <List className="mb-10 ml-4">
        <div
          id={`${title}`}
          className={`absolute w-${circleSize} h-${circleSize} bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white ${isDark ? 'dark:text-stone-900 dark:bg-white' : 'bg-stone-900' }`}
        ></div>
        <ListItem className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <Text className={`inline-block px-2 py-1 font-semibold text-white ${isDark ? 'dark:text-stone-900 dark:bg-white' : 'bg-stone-900' } rounded-md`}>
            {year}
          </Text>
          <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-stone-900'}`}>
            {title}
          </h3>
          <div className={`my-1 text-sm font-normal leading-none ${isDark ? 'text-stone-500 dark:text-stone-500' : 'text-stone-400 dark:text-stone-400'}`}>
            {duration}
          </div>
        </ListItem>
        <p className={`my-2 text-base font-normal ${isDark ? 'text-stone-400 dark:text-stone-400' : 'text-stone-500'}`}>
          {details}
        </p>
      </List>
    </OrderedList>
  );
}

export default dynamic (() => Promise.resolve(TimelineItem), {ssr: false})
