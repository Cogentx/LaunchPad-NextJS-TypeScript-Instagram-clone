interface IProps {
  img: string;
  username: string;
}

export default function Story({ img, username }: IProps) {
  return (
    <div>
      <img
        src={img}
        alt="user avatar"
        className="w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition duration-200 ease-out hover:scale-110"
        referrerPolicy="no-referrer"
    />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  );
}
