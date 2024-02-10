import { colors } from '@mui/material';
import axios from 'axios';
import './status.css';
import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const Statuses = () => {
    const [user, setUser] = useState("");
    const [data, setData] = useState([]);
    const [cdata, setcdata] = useState([]);
    const [openModal, setOpenModal] = useState(false); // State for controlling modal visibility
  const [selectedItem, setSelectedItem] = useState(null); // State for storing the selected item
  const handleOpenModal = (item) => {
    
      axios.get("http://localhost:1000/api/getstatus", {
          headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
          console.log(res);
          setcdata(res.data);
          // setUser(res.data.founderName);

      })
      .catch((err) => {
          console.log(err);
      });
 
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

    useEffect(() => {
        axios.get("http://localhost:1000/api/getstatus", {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            console.log(res.data);
            setData(res.data);
            setUser(res.data.founderName);

        })
        .catch((err) => {
            console.log(err);
        });

        // const getData = async () => {
        //     try {
        //         let response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        //         // console.log(response);
        //         // setData(response.data);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };
        // getData();
    }, []);
  return (
    <div>Statuses
           <div className="flex-container">
      {data.map((item, index) => (
        <div className="item"  key={index}>
          <img src={`http://localhost:1000/${item.imgname}`} alt="Image" />
          <h2>{item.Ref}</h2>
          <p>Founder Name: {item.founderName}</p>
          <p>Status: {item.claimedBy ? <> <p className='status'>Someone claimed it</p><button onClick={() => handleOpenModal(item)}>click to see</button> </> : 'Pending'}</p>
          <p>Place: {item.place}</p>
          
          {/* <button onClick={() => handleClaim(index)}>Claim</button> */}
        </div>
      ))}
    </div>

    <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Item Details</DialogTitle>
        <DialogContent>
          {/* Display details of the selected item */}
          {selectedItem && (
            <div>
              <p>Ref: {selectedItem.Ref}</p>
              {/* Add other item details as needed */}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    

    </div>
  )
}

export default Statuses