import React from 'react';

import Button, { ButtonTypes } from './components/Button';
import Title from './components/Title/Title';

const App = () => {
    return (
        <div >
            
            <Title title={'Blog'} />
            
            <Button
                disabled
                type={ButtonTypes.Primary}
                title={'Primary'}
                onClick={() => { alert('Primary') }} />

            <Button
                type={ButtonTypes.Secondary}
                title={'Secondary'}
                onClick={() => { }} />

            <Button type={ButtonTypes.Error} title={'Error'} onClick={() => { }} />
        </div>
    );
}

export default App;
