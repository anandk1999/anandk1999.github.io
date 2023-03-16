import { useColorMode } from '@chakra-ui/react';
import { OrderedList, List, ListItem, Text } from '@chakra-ui/react';

function TimelineItem({ year, title, duration, details }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <OrderedList className={`flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700`}>
      <List className="mb-10 ml-4">
        <div className={`absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700`} />
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

export default TimelineItem;
