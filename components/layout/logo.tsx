import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col">
        <span className="font-heading text-3xl font-semibold tracking-wider text-[#C8A96E]">
          Araliya
        </span>

        <span className="text-xs uppercase tracking-[0.4rem] text-neutral-400">
          Bridal Studio
        </span>
      </div>
    </Link>
  );
}
