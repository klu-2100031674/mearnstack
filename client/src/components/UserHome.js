import './userHome.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Nav from './Nav'
import axios from "axios";
import avatar from "../assets/avatar.jpeg"
import { useState,useEffect,useRef} from 'react';
export default function UserHome({ userData }) {
  const [data,setData] = useState(null)
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email ,setEmail] = useState("");
  const [image,setImage] = useState("");
  const currentPage = useRef();
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  const edit = () => {
    setEmail(userData.email);
    setData(true);
  };
  const save = (e) => {
    e.preventDefault();
    console.log(name, email, mobile);
    if(name == "" || mobile == "" || image == "")
    {alert("fill the all fields and upload image also");
     return;
    }
  
    axios.patch("http://localhost:5000/update", {
      name,
      email,
      mobile,
      base64:image,
    }, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => {
      console.log(res.data, "userRegister");
      setData(false);
    })
    .catch((err) => {
      console.error(err);
    });
  };
  function convertToBase64(e)
  {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = ()=>{
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = error =>{
      console.log("Error:",error);
    }
  }

  
  return (
    <div>
      <Nav />
      {data ? (
        <>
        <div className="main_pro">
        <p className='Hello_user'>Hello User........! </p>
        <br></br>
        <p className='Hi_there'>You can see your progress youv'e made with your work and your projects.</p>
        <br></br>
      </div>

      <div className="bottom">
        <form action='' method=''>
        <p style={{ position: 'relative', left: '55px', top: '30px', fontWeight: '1000', fontsize: '1000',color:'black'}}>My Account</p>
        <p style={{ position: 'relative', left: '55px', top: '60px', fontWeight: '700', fontsize: '1000',color:'black' }}>User Information</p>
        {image =="" || image==null?  <img src={avatar} className='proimage'></img>:<img src={image} className='proimage'></img>} 
        <p style={{ position: 'relative', left: '55px', top: '90px', fontWeight: '800', fontsize: '1000' ,color:'black',top:'-150px'}} >Name</p>
        <input type="text"  style={{ position: 'relative', left: '55px', top: '80px', padding: '10px', borderRadius: '10px', width: '350px', height: '25px' ,top:'-150px'}} onChange={(e) => setName(e.target.value)} required/>
        <p style={{ position: 'relative', left: '55px', top: '75px', fontWeight: '800', fontsize: '1000' ,color:'black',top:'-150px'}}>E-mail</p>
        <input type="text" value ={userData.email}style={{ position: 'relative', left: '55px', top: '65px', padding: '10px', borderRadius: '10px', width: '350px', height: '25px',top:'-150px' }} disabled onChange7={(e)=>setEmail(e.target.value)} required/>
        <p style={{ position: 'relative', left: '55px', top: '65px', fontWeight: '800', fontsize: '1000',color:'black' ,top:'-150px'}}>Mobile</p>
        <input accept='image/*' type='file' onChange={convertToBase64} required className='imageinput'/>
        <input type="text" style={{ position: 'relative',left:'-200px', top: '55px', padding: '10px', borderRadius: '10px', width: '350px', height: '25px',top:'-150px' }} onChange={(e) => setMobile(e.target.value)}/>
        <Button variant="contained" className='submit' onClick={save} type='submit'>submit</Button>
        </form>
      </div>
        </>
      ) : (
        <>
        <div className="main_pro">
        <p className='Hello_user'>Hello User........! </p>
        <br></br>
        <p className='Hi_there'>You can see your progress youv'e made with your work and your projects.</p>
        <br></br>
      </div>

      <div className="bottom">
        <p style={{ position: 'relative', left: '55px', top: '30px', fontWeight: '1000', fontsize: '1000',color:'black'}}>My Account</p>
        <p style={{ position: 'relative', left: '55px', top: '60px', fontWeight: '700', fontsize: '1000',color:'black' }}>User Information</p>
        {userData.image =="" || userData.image==null?  <img src={avatar} className='proimage'></img>:<img src={userData.image} className='proimage'></img>} 
        <p style={{ position: 'relative', left: '55px', top: '90px', fontWeight: '800', fontsize: '1000' ,color:'black',top:'-150px'}} >Name</p>
        <input type="text" value={userData.fname} style={{ position: 'relative', left: '55px', top: '80px', padding: '10px', borderRadius: '10px', width: '350px', height: '25px' ,top:'-150px'}} disabled />
        <p style={{ position: 'relative', left: '55px', top: '75px', fontWeight: '800', fontsize: '1000' ,color:'black' ,top:'-150px'}}>E-mail</p>
        <input type="text" value ={userData.email}style={{ position: 'relative', left: '55px', top: '65px', padding: '10px', borderRadius: '10px', width: '350px', height: '25px' ,top:'-150px' }} disabled />
        <p style={{ position: 'relative', left: '55px', top: '65px', fontWeight: '800', fontsize: '1000',color:'black',top:'-150px' }}>Mobile</p>
        <input type="text" value={userData.mobilenumber}style={{ position: 'relative', left: '55px', top: '55px', padding: '10px', borderRadius: '10px', width: '350px', height: '25px' ,top:'-150px' }} disabled />
        <Button variant="contained" className='logout' onClick={logOut}>LOGOUT</Button>
        <Button variant="contained" className='edit' onClick={edit}>EDIT</Button>
      </div>
      </>
        
      )}
    </div>
  );
}