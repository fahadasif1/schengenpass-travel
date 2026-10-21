import type {Metadata, Viewport} from 'next';
import {Header,Footer} from '@/components/SiteShell';
import './globals.css';
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'https://schengenpass.co';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:'SchengenPass Travel | Explore a World of Possibilities',template:'%s | SchengenPass Travel'},description:'Discover inspiring destinations, explore travel experiences and build a personalised trip brief with SchengenPass Travel.',openGraph:{type:'website',siteName:'SchengenPass Travel',title:'SchengenPass Travel | Travel starts with a feeling',description:'Beautiful destinations. Thoughtful journeys. Start exploring.',url:siteUrl},robots:{index:true,follow:true}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#12303c'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main id="main-content">{children}</main><Footer/></body></html>}
