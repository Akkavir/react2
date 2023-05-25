import React,{useContext} from 'react';
import MyContext from './MyContext';

const Con2 = () => {
const { value, setValue } = useContext(MyContext);

function handeClick(){
    setValue(value+1.5);
}
    return <button onClick={handeClick}>
    Con2: {value}
    </button>;
}


export default Con2;