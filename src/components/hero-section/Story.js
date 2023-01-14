import React from 'react';
import { Container } from 'react-bootstrap';

const Story = () => {
    return (
        <Container className='mt-5'>
            <div className='storiers'>
                <div className='story-1'>
                    <h1 className='story-title'>Client Success Story</h1>
                    <h4>
                        We are proud to be a <span className='highline'>customer-centric</span> company. For your success in the digital transformation, we ensure the <span className='highline'>fastest delivery</span> with <span className='highline'>360 solutions & services</span>. 
                    </h4>
                    <button className='quote-btn'>Get a Quote</button>
                </div>
                <div></div>
                <div className='story-2'>
                    <div className='video-story'>
                        <iframe width="800" height="500" src="https://www.youtube.com/embed/PKATJiyz0iI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Story;