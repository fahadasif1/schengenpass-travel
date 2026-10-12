import Link from 'next/link';
import {ArrowLeft,Compass} from 'lucide-react';
export default function NotFound(){return <section className="not-found"><div><Compass size={55} strokeWidth={1}/><span>404 / A WRONG TURN</span><h1>Looks like we've<br/><em>taken a detour.</em></h1><p>That page isn't on the map, but plenty of beautiful places still are.</p><Link href="/" className="btn btn-dark"><ArrowLeft size={17}/> Return home</Link></div></section>}
