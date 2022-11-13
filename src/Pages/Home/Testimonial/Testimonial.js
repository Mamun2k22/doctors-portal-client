import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            img: people1,
            review_user: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California"

        },
        {
            _id: 2,
            name: "John Cabin",
            img: people2,
            review_user: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "New York"

        },
        {
            _id: 3,
            name: "Hoery Lencon",
            img: people3,
            review_user: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "Florida"

        }


    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div className='text-center'>
                    <h4 className='text-xl text-primary-text-bold'> Testimonial</h4>
                    <p> What Our Passion</p>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>

            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(view => <TestimonialCard
                        key={view._id}
                        view={view}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;