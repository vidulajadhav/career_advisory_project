import React from 'react';
import { Button } from '@/components/ui/button';

const Welcome_banner: React.FC = () => {
    return (
       <div className="p-5 bg-gradient-to-tr from-[#BE575F] via-[#A338E3] to-[#AC76D6] rounded-lg">
    <h2 className="font-bold text-2xl text-white">AI Career Coach Agent</h2>
    <p className="text-white">We're glad to have you here. Explore your career opportunities.</p>
    <Button variant="outline" className="mt-3">Let's get Started</Button>
</div>

    );
};

export default Welcome_banner;