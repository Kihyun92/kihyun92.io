import Link from 'next/link';

export const Navigator: React.FC = () => {
  return (
    <div className="px-10 py-8 bg-green-100">
      <nav className="flex items-center justify-between mx-auto">
        <div>
          <Link href="/">kihyuns blog</Link>
        </div>
        <ol className="flex flex-row">
          <li className="px-5 py-2"><Link href="/posts">Posts</Link></li>
          <li className="px-5 py-2"><Link href="/wiki">Wiki</Link></li>
          <li className="px-5 py-2"><Link href="/me">Me</Link></li>
        </ol>
        <div>
          <button>☾</button>
          <button>github</button>
        </div>
      </nav>
    </div>
  );
};
