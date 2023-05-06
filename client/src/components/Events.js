import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Nav from "./Nav"; 
import axios from 'axios';
import { useEffect,useRef ,useState} from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'year', headerName: 'Year', width: 130 },
    {field: 'day',headerName: 'Day',width: 130,},
    {field: 'country',headerName: 'Country',width: 130,},
    {field: 'eventname',headerName: 'Event Name',width: 130,},

];
export default function Events() {
    const currentPage = useRef();
    useEffect(() => {
        currentPage.current = 1;
        getAllUser();
      }, []);
    const [data,setData] = useState([]);
    const getAllUser = () => {
        axios.get('http://localhost:5000/getAllevents')
          .then((response) => {
            console.log(response.data);
            if (Array.isArray(response.data)) {
              setData(response.data);
            } else if (response.data && Array.isArray(response.data.users)) {
              setData(response.data.users);
            } else {
              console.error('Invalid response data:', response.data);
            }
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      };
    return (<div>
        <Nav></Nav>
        <div style={{ height:'auto', width: '100%',fontSize:'50px'}}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                sx={{fontSize:'20px',width:'100%'}}
            />
        </div>
        </div>
    );
}