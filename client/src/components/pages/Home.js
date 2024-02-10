import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
const Home = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  const [comments, setComments] = useState({});

  const handleCommentChange = (event, index) => {
    const { value } = event.target;
    setComments({ ...comments, [index]: value });
  };

  const handleClaim = async (id) => {
    console.log(id);
    console.log(localStorage.getItem("token"));
    try {
      // Replace 'http://localhost:1000' with your API endpoint
      const response = await axios.put(`http://localhost:1000/api/claim`, { claimedById: id },
      {
        headers :{
            Authorization : localStorage.getItem("token")
        }
      });

      // Handle the response if needed
      console.log('Object updated successfully:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error updating object:', error);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:1000/api/home", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        console.log(res);
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
    <div>
      Home {user}
      <div className="flex-container">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <img src={`http://localhost:1000/${item.imgname}`} alt="Image" />
            <h2>{item.Ref}</h2>
            <p>Founder Name: {item.founderName}</p>
            <p>Status: {item.status ? 'Completed' : 'Pending'}</p>
            <p>Place: {item.place}</p>
            <input
              type="text"
              placeholder="Add a comment"
              value={comments[index] || ''}
              onChange={(e) => handleCommentChange(e, index)}
            />
            <button onClick={() => handleClaim(item._id)}>Claim</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
