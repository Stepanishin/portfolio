import { GithubOutlined } from '@ant-design/icons';
import { LinkedinOutlined, MailOutlined } from '@ant-design/icons/lib/icons';
import React, {FC} from 'react';
import './Society.scss'

const SocietyList = [
    {
        name: 'Github',
        url:'https://github.com/Stepanishin',
        icon: <GithubOutlined style={{ fontSize: '30px' }} className='icon' />,
    },
    {
        name: 'LinkedIn',
        url:'https://www.linkedin.com/in/evgenii-stepanishin-a90ba717b/',
        icon: <LinkedinOutlined style={{ fontSize: '30px'}} className='icon' />,
    },
    {
        name: 'Mail',
        url:'mailto:evgenii.stepanishin@gmail.com',
        icon: <MailOutlined style={{ fontSize: '30px' }} className='icon' /> ,
    },
]

const Society: FC = () => {

    return (
        <div className='Society_container' >
            {
               SocietyList.map(item => {
                return (
                    <div key={item.name}>
                        <a style={{color: 'black'}} href={item.url} target="_blank" rel="noreferrer">{item.icon}</a>
                    </div>
                )
               })
            }
        </div>
    );
};

export default Society;