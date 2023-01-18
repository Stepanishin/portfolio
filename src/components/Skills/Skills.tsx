import React, {FC} from 'react';
import './Skills.scss' 
import ReactImg from './img/React.svg'
import JSImg from './img/javascript.svg'
import TypescriptImg from './img/typescript.svg'
import ReduxImg from './img/redux.svg'
import AntDesignImg from './img/ant-design.svg'
import HTML5Img from './img/html5.svg'
import MaterialUIImg from './img/material-ui.svg'
import SASSImg from './img/sass.svg'
import NodeJSImg from './img/nodejs.svg'
import ExpressImg from './img/express-js.svg'
import MongoDBImg from './img/mongodb.svg'
import FirebaseImg from './img/firebase.svg'
import Title from '../UI/Title/Title';

interface Item {
    name: string,
    img: string,
    width?: number,
    heigth?: number
}

const myFrontendSkills = [
    {
        name: 'React',
        img: ReactImg,
    },
    {
        name: 'TypeScript',
        img: TypescriptImg,
    },
    {
        name: 'JavaScript',
        img: JSImg,
    },
    {
        name: 'Redux',
        img: ReduxImg,
    },
    {
        name: 'SCSS/SASS',
        img: SASSImg,
    },
    {
        name: 'HTML5',
        img: HTML5Img,
    },
    {
        name: 'AntDesign',
        img: AntDesignImg,
    },
    {
        name: 'MaterialUI',
        img: MaterialUIImg,
    },
]

const myBackendSkills = [
    {
        name: 'NodeJS',
        img: NodeJSImg,
        width: 80,
    },
    {
        name: 'Express.js',
        img: ExpressImg,
    },
    {
        name: 'MongoDB',
        img: MongoDBImg,
        width: 80,
    },
    {
        name: 'Firebase',
        img: FirebaseImg,
    },
]

const Skills: FC = () => {

    return (
        <section id='SKILLS' className='container skills_container'>
            <Title className={'title'} title={'SKILLS & TOOLS'} />
            <div>
                <SkillsList title={'FrontEnd:'} list={myFrontendSkills} />
                <SkillsList title={'BackEnd:'} list={myBackendSkills} />
            </div>
        </section>
    );
};

export default Skills;

interface ISkillList {
    title:string,
    list:Item[],
}

const SkillsList: FC<ISkillList> = ({title, list}) => {

    return (
        <div className='skills_content_wrap'>
            <h3 className='skills_content_title' >{title}</h3>
            <div className='skills_content_list' >
                {
                    list.map((el:Item) => {
                        return (
                            <div className='skills_item' key={el.name}>
                                <img src={el.img} width={el.width ? el.width : 50} height={el.heigth ? el.heigth : 50} alt="" />
                                <p>{el.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}