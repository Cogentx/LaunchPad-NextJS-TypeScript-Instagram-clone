import type { ContextualCard } from '@faker-js/faker/helpers';

interface IProps {
  profile: ContextualCard;
}

export default function Suggestion({ profile }: IProps) {
  const { name } = profile;

  return <div>{name}</div>;
}
