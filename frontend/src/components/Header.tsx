import { Link } from "@heroui/react";

export function Header() {
  return (
    <header className="header bg-green-300 flex flex-col justify-center text-center">
      <h1 className="text-3xl font-semibold py-3">Checkpoint : frontend</h1>
      <div className="bg-red-300 flex w-auto justify-center gap-3 ">
        <Link href="/addcountry">Add country</Link>
        <Link href="/countries">Countries</Link>
      </div>
    </header>
  );
}