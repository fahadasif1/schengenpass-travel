import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowRight,CalendarDays} from 'lucide-react';
import {guides} from '@/lib/data';
import {imageStyles} from '@/lib/utils';
import {CTASection} from '@/components/SiteShell';
export function generateStaticParams(){return guides.map(g=>({slug:g.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const g=guides.find(x=>x.slug===slug);return {title:g?.title||'Travel story',description:g?.intro};}
export default async function Story({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const g=guides.find(x=>x.slug===slug);if(!g)notFound();return <><section className="story-intro"><div className="container story-heading"><Link href="/journal" className="story-back"><ArrowLeft size={16}/> Back to journal</Link><div className="section-eyebrow"><span className="eyebrow-line"/>{g.category} · {g.date}</div><h1>{g.title}</h1><p>{g.intro}</p></div></section><div className="story-cover" style={imageStyles(g.image)}/><section className="section"><article className="story-body"><p className="story-lead">The beauty of travel is that it means something different to each of us. Here are a few ideas to take with you as you dream up your next adventure.</p>{g.sections.map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<p className="story-footnote">This article is provided as general travel inspiration. Always verify current travel arrangements and official entry requirements before departure.</p><Link href="/destinations" className="btn btn-dark">Explore destinations <ArrowRight size={16}/></Link></article></section><CTASection/></>}
