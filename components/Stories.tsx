import { useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import { ContextualCard } from '@faker-js/faker/helpers';
import Story from './Story';

export default function () {
  const [suggestions, setSuggestions] = useState<Array<ContextualCard>>([]);

  // empty array means run once
  useEffect(() => {
    const suggestions:Array<ContextualCard> =
      [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className='flex border border-gray-200 mt-8 space-x-2 rounded-sm bg-white overflow-x-scroll'>
      {suggestions.map((profile: ContextualCard, index) => (
        <Story key={index} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
}
