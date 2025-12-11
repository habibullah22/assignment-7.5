import React from 'react';

const Tickets = () => {
    return (
        <div className='w-full container mx-auto'>
            <section className="w-11/12 mt-10 border mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-8 border">
                    <h1 className='text-2xl font-bold'>Customer Tickets</h1>
                    
                </div>
                <div className="lg:col-span-4 border">
                    <h1 className='text-2xl font-bold'>Task Status</h1>
                </div>
            </section>
        </div>
    );
};

export default Tickets;