export default function Test() {
  return (
    <nav className="mx-auto flex w-full max-w-4xl items-center rounded-xl bg-black px-4 py-3 text-white">
      <div className="flex  items-center ">
        <span className="text-sm font-semibold">BoyaStudio</span>
      </div>

      <div className="flex flex-1 items-center justify-center gap-6">
        <a href="#" className="text-xl">Services</a>
        <a href="#" className="text-xl">Stack</a>
        <a href="#" className="text-xl">À propos</a>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <a
          href="#"
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black"
        >
          Prendre rendez-vous
        </a>
      </div>
    </nav>
  )
}
