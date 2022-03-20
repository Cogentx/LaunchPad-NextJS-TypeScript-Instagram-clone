import { useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import Suggestion from './Suggestion';
import { ContextualCard } from '@faker-js/faker/helpers';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState<Array<ContextualCard>>([]);

  useEffect(() => {
    const suggestions: Array<ContextualCard> = [...Array(5)].map(
      (_, index) => ({
        ...faker.helpers.contextualCard(),
        id: index,
      })
    );

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className=" font-bold text-gray-400">Suggestions for you</h3>
        <button className="cursor-pointer font-semibold text-gray-600">
          See All
        </button>
      </div>

      {suggestions.map((profile, index) => (
        <Suggestion key={index} username={profile.username} avatar={profile.avatar} company={profile.company}/>
      ))}
    </div>
  );
}
