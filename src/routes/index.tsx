import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">
      <h1 className="text-balance text-center text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl dark:text-slate-50">
        Hello World
      </h1>
    </section>
  );
}
