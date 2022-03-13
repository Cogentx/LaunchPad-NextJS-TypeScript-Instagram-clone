import Stories from './Stories';

export default function Feed() {
  return (
    <main className="mx-auto grid min-h-screen grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-1 bg-red-500 md:col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
      </section>

      <section className="hidden bg-green-500 xl:col-span-1 xl:block">
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}
