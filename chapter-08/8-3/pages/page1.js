import Link from "next/link";

export default function Page1() {
  return (
    <div>
      <p>This is page1.</p>
      <Link href="/page2">
        <a>page2로 이동</a>
      </Link>
    </div>
  );
}
