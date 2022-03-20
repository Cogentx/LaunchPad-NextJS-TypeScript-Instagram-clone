import { useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import Suggestion from './Suggestion';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState<Array<any>>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, index) => ({
      ...faker.helpers.contextualCard,
      id: index,
    }));
    setSuggestions(suggestions);
  }, [suggestions]);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className=' text-gray-400 font-bold'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold cursor-pointer'>See All</button>
      </div>

      {suggestions.map((suggestions, index) => (
        <Suggestion key={index}/>
      ))}
    </div>
  );
}
