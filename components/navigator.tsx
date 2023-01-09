import Link from 'next/link';

export const Navigator: React.FC = () => {
  return (
    <div className="px-10 py-12 bg-green-100">
      <nav className="flex items-center justify-between mx-auto">
        <div>
          <Link href="/">kihyuns blog</Link>
        </div>
        <ol className="flex flex-row">
          <li><Link href="/wiki">Wiki</Link></li>
          <li><Link href="/me">Me</Link></li>
        </ol>
        <div>
          <button>☾</button>
          <button>github</button>
        </div>
      </nav>
    </div>
  );
};
