import Link from "next/link";
import MobileNav from "./mobile-nav";
import { Sheet, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between p-4 bg-black text-white">
        {/* Logo Section */}
        <h1 className="text-xl font-bold">
          <Link href="/">MyApp</Link>
        </h1>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white ">
            Home
          </Link>

          <Link href="/services" className="text-white ">
            Services
          </Link>
          <Link href="/profile" className="text-white ">
            Profile
          </Link>
          <Link href="/createPost" className="text-white ">
            Add Post
          </Link>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="rounded-full w-10 h-10 flex items-center justify-center" />
              </SheetTrigger>
              <MobileNav />
            </Sheet>
          </div>
        </nav>
      </div>
      <div className="w-full h-1.5 bg-white"></div>
    </header>
  );
}
