"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function History() {
    const [userHistory, setUserHistory] = useState([]);

    return (
        <div className='mt-5 p-5 border rounded-xl'>
            <h2 className='font-bold text-lg'>My History</h2>
            <p>What you previously worked on, find it over here</p>

            {userHistory?.length === 0 && (
                <div className='flex items-center justify-center mt-5 flex-col mt-6'>
                    <Image src='/bulb.jpg' width={50} height={50} alt='bulb' />

                    <h2>You do not have any history yet!!</h2>
                    <Button className='mt-5'>Explore AI Tools</Button>
                </div>
            )}
        </div>
    );
}

export default History;
