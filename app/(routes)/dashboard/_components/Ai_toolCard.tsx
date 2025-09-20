import React from 'react';
import Image from 'next/image';//taken from copilot
import Link from 'next/link';
import { Button } from '@/components/ui/button';



export interface TOOL{

        name:string,
        desc:string,
        icon:string,
        button:string,
        path:string
}

type AIToolProps={
    tool:TOOL
}
function Ai_toolCard({tool}:AIToolProps) {
    return (
        <div className='p-3 border rounded-lg'>
            <Image src={`/icons/${tool.icon}`} width={40} height={40} alt={tool.name} />
            <h2 className='font-bold mt-2'>{tool.name}</h2>
            <p className='text-gray-400'>{tool.desc}</p>
            <Link href={tool.path}>
            <Button className='w-fukk mt-3'>{tool.button}</Button>
            </Link>
        </div>
    );
};

export default Ai_toolCard;