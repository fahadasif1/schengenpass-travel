'use client';
import {useSearchParams} from 'next/navigation';
import {EnquiryForm} from './EnquiryForm';
export function ContactContent(){const search=useSearchParams();return <EnquiryForm initialDestination={search.get('destination')||''}/>}
