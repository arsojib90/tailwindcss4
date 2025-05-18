export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between bg-violet-900 text-white py-4">
        <div className="logo">
          <span className="font-bold text-xl mx-9 cursor-pointer">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
          <li className="cursor-pointer hover:font-bold transition-all duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:font-bold transition-all duration-300">
            Your Task
          </li>
        </ul>
      </nav>
    </>
  );
}
