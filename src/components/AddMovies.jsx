import React, { useState } from "react";
import Modal from "react-modal";
import Rating from "./Rating";
import Button from '@mui/material/Button';

const customStyles = {
  overlay:{
    backgroundColor: 'rgba(0, 0, 0, 0.80)'
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "black",
    border: "1px solid red",
    borderRadius: '35px',
  },
};

Modal.setAppElement("#root")

const AddMovies = ({ add }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    date: "",
    image: "",
    rating: 1,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  function openModal() {setIsOpen(true)}

  function closeModal() {setIsOpen(false)}

  const handleRate = (score) => setForm({ ...form, rating: score })
  return (

    <div className="modal">
      <Button 
      onClick={openModal}
      variant="contained"
      color="error"
      >Add movie</Button>
      <Modal 
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal">

        <form 
          onSubmit={(e) => {
            e.preventDefault()
            let newMovie = {
              ...form,
              id: Math.random(),
            }
            add(newMovie)
            closeModal()}}>

          <div>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Logo" width="160" height="35"/>
          </div>
          <br />    

          <label>Title</label>

          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}/>

          <label>Date of release</label>

          <input
            id="date"
            type="date"
            value={form.date}
            name="date"
            onChange={handleChange}/>

          <label>Rating</label>

          <Rating score={form.rating} handleRating={handleRate} />

          <label>Poster URL</label>

          <input
            type="url"
            value={form.image}
            name="image"
            onChange={handleChange}/>

          <div className="modalBtn">
            <Button variant="contained" size="large" color="error" type="submit">Add</Button>
            <span> </span>
            <Button variant="contained" size="large" color="error" onClick={closeModal}>Cancel</Button>
          </div>
        </form>
      </Modal>
      
    </div>
  )
}

export default AddMovies
