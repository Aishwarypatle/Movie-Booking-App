import { Button , Dropdown ,DropdownButton} from 'react-bootstrap';
import {useState,useEffect}  from 'react'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import './Auth.css'



const Auth = () =>
{
    const [showSignUp , setshowSignUp ] = useState(false);

    const [userID, setUserID ] = useState("");
    const [email, setEmail ] = useState("");
    const [Password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userType, setUserType] = useState("CUSTOMER");

    const updateSignUpdata = (e) => 
    {
      const id = e.target.id;

      if (id === "userId")
        {
        setUserID(e.target.value);
        }
      else if (id === "email")
        {   
         setEmail(e.target.value);
        }
      else if (id === "password")
        {
            setPassword(e.target.value);
        }
      else if (id === "username")
        {
          setUserName(e.target.value);
        }
    }


    const clearState = () =>
     {
        setUserID("");
        setEmail("");
        setPassword("");
        setUserName("");
        setUserType("CUSTOMER");

     }


    const handleSelect=(e) =>
      {
        
        setUserType(e);
      }

    const toggleSignUp = (e) =>
    {
      clearState();
      setshowSignUp(!showSignUp);
    }

    const SignUpFn =(e) =>
    {
      e.preventDefault();
      console.log('signup')
    }

    const LoginFn =(e) =>
    {
      e.preventDefault();
      console.log('Login')
    }




    return(
      <>
      <div id='loginPage'>
      
      <div id='loginPage' className='bg-dark d-flex justify-content-center align-items-center vh-100 vw-100'>

        <div id='loginbox' className='card m-5 p-5 text-light shadow-lg bg-dark d-flex justify-content-center align-items-center backg'>
            
          <h3 className='m-2'>{(showSignUp)?'Sign-Up':'Login'}</h3>

            <form onSubmit={(showSignUp)?SignUpFn : LoginFn}>  

              

                  <div className='input-group m-1'>
                      <input type='text'className='form-group m-1 rounded-2' id='userId' placeholder='UserID' value={userID} onChange={updateSignUpdata} autoFocus required/>
                  </div>

                  <div className='input-group m-1'>
                      <input type='password'className='form-group m-1 rounded-2' id='password' placeholder='Password' value={Password} onChange={updateSignUpdata} autoFocus required/>
                  </div>

                  {
                    showSignUp && 
                  <>

                  <div className='input-group m-1'>
                      <input type='username'className='form-group m-1 rounded-2 input-lg'id='username' placeholder='UserName' value={userName} onChange={updateSignUpdata} autoFocus required/>
                  </div>

                  
                  <div className='input-group m-1'>
                      <input type='email'className='form-group m-1 rounded-2' id='email' placeholder='Email' value={email} onChange={updateSignUpdata} autoFocus required/>
                  </div>


                  <div className='row m-2'>
                      <div className='col'>
                          <span className='mx-1 my-1'>User type</span>
                      </div>

                      <div className='col'>

                          <DropdownButton 
                            title={userType}
                            id='userType'
                            align='end'
                            variant='light'
                            onSelect={handleSelect}
                            >
                            <Dropdown.Item eventKey='CUSTOMER'>CUSTOMER</Dropdown.Item>
                            <Dropdown.Item eventKey='CLIENT'>CLIENT</Dropdown.Item>

                          </DropdownButton>

                      </div>
                  </div>
                  </>

                  }

                <div className='input-group'>
                    <input type='submit' className='form-control btn btn-danger mt-2' value={showSignUp?"Sign UP" : "Login"}/>
                </div>

                <div className='text-center pe mt-3' onClick={toggleSignUp}>{showSignUp?"Already have an Account? Login " : "Don't Have an Account? Sign UP"}</div>
                  
            </form>

            </div>
            </div>
      </div>

      </>
  )
}




export default Auth;