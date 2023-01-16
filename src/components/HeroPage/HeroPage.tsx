import React, {FC} from 'react';
import './HeroPage.scss'

const HeroPage: FC = () => {


    return (
        <main className='container heroPage_container'>
            <div className='heroPage_description'>
                <p>Hello, I`m Evgenii.</p>
                <p>I`m Full-stack Web Developer</p>
            </div>
        </main>
    );
};

export default HeroPage;