import type {MetadataRoute} from 'next';
import {destinations,guides} from '@/lib/data';
export const dynamic = 'force-static';
const base=process.env.NEXT_PUBLIC_SITE_URL||'https://schengenpass.co';
export default function sitemap():MetadataRoute.Sitemap{return ['','destinations','experiences','plan','saved','about','contact','faq','journal','privacy','terms',...destinations.map(d=>`destinations/${d.slug}`),...guides.map(g=>`journal/${g.slug}`)].map(path=>({url:`${base}/${path}`,changeFrequency:path?('monthly' as const):('weekly' as const),priority:path?0.7:1}));}
