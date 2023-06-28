import React, { useState } from 'react';
import Button, { ButtonTypes } from './components/Button';
import Title from './components/Title';
import TabsList from './components/TabsList';
import Input from "./components/Input";
import Username from "./components/Username/Username";
import DislikeIcon from './assets/icons/DislikeIcons';
import LikeIcons from './assets/icons/LikeIcons/LikeIcon';
import Bookmark from './assets/icons/Bookmark/Bookmark';
import MoreHorizontal from './assets/icons/MoreHorizontal/MoreHorizontal';
import Posts, { PostsTypes } from './components/Posts/Posts';


const App = () => {
    const [index, setIndex] = useState(1);
    const [inputValue, setInputValue] = useState("");

    const onClickPrimary = () => {
        setIndex((prevIndex) => prevIndex + 1);
    };
    const onChange = (value: string) => {
        setInputValue(value);
    }; 
    return (
        <div >
            {/* <Input
                isTextarea
                title={"Test Input"}
                placeholder={"Hello World!"}
                onChange={onChange}
                value={inputValue}
            />
            <Username username={"Vladislav"} />


            <Title title={'Blog'} />
            <Button
                disabled
                type={ButtonTypes.Primary}
                title={'Primary'}
                onClick={() => { alert('Primary') }}
            />

            <Button
                type={ButtonTypes.Secondary}
                title={'Secondary'}
                onClick={() => { }}
            />

            <Button type={ButtonTypes.Error} title={'Error'} onClick={() => { }} />  */}

            
            <Posts
                title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                text='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
                image='https://klike.net/uploads/posts/2019-09/1568880464_15.jpg'
                id={PostsTypes.Large}
                date={'11.21.2023'}
            />
            <Posts
                title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                text='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
                image='https://klike.net/uploads/posts/2019-09/1568880464_15.jpg'
                id={PostsTypes.Medium}
                date={'11.21.2023'}
            />
            <Posts
                title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                text='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
                image='https://klike.net/uploads/posts/2019-09/1568880464_15.jpg'
                id={PostsTypes.Small}
                date={'11.21.2023'}
            />

            <TabsList />

        </div>
    );
}

export default App;
