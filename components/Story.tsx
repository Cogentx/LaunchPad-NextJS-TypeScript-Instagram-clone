interface IProps {
  img: string;
  username: string;
}

export default function Story({ img, username }: IProps) {
  return (
    <div>
        <img src={img} alt="user avatar" className="rounded-full border-2 border-red-500 w-14 p-[1.5px] object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"/>
        <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}
