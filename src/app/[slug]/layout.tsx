export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="my-24 container max-w-3xl mx-auto px-10">
      {children}
    </main>
  );
}