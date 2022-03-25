interface IProps {
  username: string;
  avatar: string;
  company: { name: string; catchPhrase: string; bs: string };
}

export default function Suggestion({ username, avatar, company }: IProps) {
  return (
    <div className="mt-3 flex items-center justify-between">
      <img
        src={avatar}
        alt=""
        className="h-10 w-10 rounded-full border p-[2px]"
        referrerPolicy="no-referrer"
      />
      <div className="ml-4 flex-1">
        <h2 className="text-sm font-semibold">{username}</h2>
        <h3 className="text-xs text-gray-400">
          Works at <span className="truncate">{company.name}</span>
        </h3>
      </div>
      <button className="text-xs font-bold text-blue-400">Follow</button>
    </div>
  );
}
