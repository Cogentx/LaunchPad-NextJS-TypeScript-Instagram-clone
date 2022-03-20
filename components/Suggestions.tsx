import { useEffect, useState } from 'react';
import faker from '@faker-js/faker';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState<Array<any>>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, index) => ({
      ...faker.helpers.contextualCard,
      id: index,
    }));
    setSuggestions(suggestions);
  }, [suggestions]);

  return <div></div>;
}
