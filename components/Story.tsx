import { ContextualCard } from "@faker-js/faker/helpers"

interface IProps {
  profile:ContextualCard
}

export default function Story({profile}:IProps) {

  return (
    <div>{profile.name}</div>
  )
}
