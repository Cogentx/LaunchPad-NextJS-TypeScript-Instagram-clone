import { useEffect } from 'react';
import faker from '@faker-js/faker';

export default function () {
  // empty array means run once
  useEffect(() => {
    const suggestions = [
      [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      })),
    ];
    console.log(suggestions);
  }, []);

  return (
    <div>
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}
