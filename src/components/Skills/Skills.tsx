import React, {FC} from 'react';
import './Skills.scss' 
import ReactImg from './img/React.svg'
import JSImg from './img/javascript.svg'
import TypescriptImg from './img/typescript.svg'
import ReduxImg from './img/redux.svg'

interface Item {
    name: string,
    img: string,
    width: string,
    height:string;
}

const myFrontendSkills = [
    {
        name: 'React',
        img: ReactImg,
        width: '30',
        height:'30',
    },
    {
        name: 'TypeScript',
        img: TypescriptImg,
        width: '30',
        height:'30',
    },
    {
        name: 'JavaScript',
        img: JSImg,
        width: '30',
        height:'30',
    },
    {
        name: 'Redux',
        img: ReduxImg,
        width: '30',
        height:'30',
    },
]

const Skills: FC = () => {

    return (
        <div className='container skills_container'>
            <h2>SKILLS & TOOLS</h2>
            <div>
                {
                    myFrontendSkills.map((el:Item) => {
                        return (
                            <div>
                                <p>{el.name}</p>
                                <img src={el.img} width={el.width} height={el.height} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Skills;