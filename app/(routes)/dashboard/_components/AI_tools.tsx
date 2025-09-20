import React from 'react';
import Ai_toolCard from './Ai_toolCard';
import{} from "lucide-react"

const aitoolsList = [
    {
        name: 'AI Career Q&A Chat',
        desc: 'Chat with AI',
        icon: 'a&A.png',
        button: 'Letss Chat',
        path: '/ai-chat'
    },
    {
        name: 'AI Resume Analyser',
        desc: 'Chat with AI Agent',
        icon: 'analyzer.png',
        button: 'Start',
        path: '/ai-Resume'
    },
    {
        name: 'Learning Roadmap',
        desc: 'Know what is ahead',
        icon: 'roadmap.jpg',
        button: 'Get Started',
        path: '/Learning-Roadmap'
    },
    {
        name: 'Cover Letter Generator',
        desc: 'Get your CV now!',
        icon: 'resume.jpg',
        button: 'Lets Generate',
        path: '/Cover-Letter-Generator'
    }
];

function AI_tools() {
    return (
        <div className="mt-7 p-5 bg-white border rounded-xl">
            <h2 className='font-bold text-lg'>Available AI Tools</h2>
            <p>Start Building ans Shape Your Career with this exclusive AI Tools</p>
            {/* Add your AI tools UI here */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4'>
                {aitoolsList.map((tool:any,index)=> (
                    <Ai_toolCard tool={tool} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default AI_tools;