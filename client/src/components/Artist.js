import Nav from './Nav';
import './artist.css';
import axios from "axios";
import king from '../assets/be.jpg';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { Component, useEffect, useState ,useRef} from "react";
import { colors } from '@mui/material';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Artist() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [data, setData] = useState([]);
 
  const currentPage = useRef();
  useEffect(() => {
    currentPage.current = 1;
    getAllartist();
    axios.get('http://localhost:5000/getAllartist')
    .then((response) => {
      console.log(response.data);
      if (Array.isArray(response.data)) {
        setData(response.data);
        console.log(response.data);
      } else if (response.data && Array.isArray(response.data.users)) {
        setData(response.data.users);
        console.log(response.data.users);
      } else {
        console.error('Invalid response data:', response.data);
      }
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
    });

  }, []);
 
  const getAllartist = () => {
    axios.get('http://localhost:5000/getAllartist')
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setData(response.data);
          console.log(response.data);
        } else if (response.data && Array.isArray(response.data.users)) {
          setData(response.data.users);
          console.log(response.data.users);
        } else {
          console.error('Invalid response data:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };
  return (
    <div classNameName="App">
        <Nav/>
        <div class="card-container">
        <div className="container" style={{position:'block',left:'100px',paddingTop:'20px',marginRight:'100px'}}>
            <div className="row" >
          
      {data && data.map((obj) => {
        return(
          <div className="col-md-2" style={{paddingTop:'30px',margin:'2.6em'}}>
             <article class="card">
  <img
    class="card__background"
    src={obj.image}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title" style={{color:'white'}}>{obj.name}</h2>
      <h2 class="card__title" style={{fontSize:'20px',color:'white'}}>{obj.role}</h2>
      <p class="card__description" style={{color:'white'}}>
        {obj.dec}
      </p>
    </div>
    <button class="card__button" style={{color:'white'}}>Read more</button>
  </div>
</article>
    </div>
          );
        })}
       
            </div>
          </div>
        </div>
    </div>
  );
}

export default Artist;