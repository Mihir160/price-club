import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name:'Free', price:0, features:[
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature'
        ]},
        {id:1, name:'Medium', price:9.99, features:[
            'EveryThing on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature']},
        {id:1, name:'Premium', price:19.99, features:[
            'EveryThing on Premium',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature']},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 text-white p-12'>Best Deal of the Town</h2>
           <div className='grid lg:grid-cols-3 gap-3 mt-4'>
           {
                pricingOptions.map(option => <PricingOptions key={option.id} option={option}></PricingOptions>)
            }
           </div>
        </div> 
    );
};

export default Pricing;