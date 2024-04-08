export default function App() {
  return (
    <main className="w-full h-screen relative flex">
      <section className="flex flex-col p-10 ml-20 w-full gap-5 relative">
        <h1 className="text-2xl text-neutral-200">Dashboard</h1>
        <div className="w-full h-80 bg-neutral-100/10 border rounded-xl border-neutral-500/50" />
        <div className="flex gap-5 w-full">
          <div className="w-1/2 h-80 bg-neutral-100/10 border rounded-xl border-neutral-500/50" />
          <div className="w-1/2 h-80 bg-neutral-100/10 border rounded-xl border-neutral-500/50" />
        </div>
      </section>
    </main>
  )
}