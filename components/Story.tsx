interface IProps {
  img: string;
  username: string;
}

export default function Story({ img, username }: IProps) {
  return (
    <div>
        <img src={img} alt="user avatar" className="rounded-full"/>
        <p>{username}</p>
    </div>
  );
}
