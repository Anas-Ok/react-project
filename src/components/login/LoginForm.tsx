import { ChangeEvent, useState } from 'react';
import './index.scss';
import { IUserData } from '../../interfaces';
import { formInputList } from '../../data';

interface IProps {
    setIsLoggedIn : (Val: boolean) => void;
    userData: IUserData;
    setUserData: (user: IUserData) => void;
}

const RegisterForm = ({setIsLoggedIn, userData, setUserData}: IProps) => {
  
  const [inputArr, setInputArr] = useState(formInputList);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const {value, name} = event.target;
      setUserData({
        ...userData,
        [name]: value,
      })
    };

    const renderFormInputList = formInputList.map(input => (
      
      <div className="input-wrapper">
      <label htmlFor={input.id}>{input.label}:</label>
        <input
        type={input.type}
        name={input.name}
       id={input.id} 
       value={userData[input.name]} 
       onChange={event => { onChangeHandler(event); }}
      />
    </div>
    ));
    

    return (
        
        <form className="login-form" onSubmit={(event) => {
            event.preventDefault();
        }}>
            
            {renderFormInputList}
            <button onClick={() => setIsLoggedIn(true)}>LOGIN</button>
        </form>
    );
};

export default RegisterForm;