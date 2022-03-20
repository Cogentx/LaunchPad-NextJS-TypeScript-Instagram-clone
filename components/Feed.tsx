import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

export default function Feed() {
  return (
    <main className="mx-auto grid min-h-screen grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-1 md:col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden bg-green-500 xl:col-span-1 xl:block">
        <MiniProfile/>
        <Suggestions/>
      </section>
    </main>
  );
}
