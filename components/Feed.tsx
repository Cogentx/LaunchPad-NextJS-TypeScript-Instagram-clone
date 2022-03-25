import { useSession } from 'next-auth/react';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

export default function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`mx-auto grid min-h-screen grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${
        !session && '!max-w-3xl !grid-cols-1'
      }`}
    >
      {/* use '!' (meaning Important) in front of CSS classes inside JSX expression to force override existing style if `session` condition not met */}
      <section className="col-span-1 md:col-span-2">
        <Stories />
        <Posts />
      </section>

      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}
