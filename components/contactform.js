import React from 'react'
import { Paper } from "@mui/material";
import { Container, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";

const contactform = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
}
  return (
    <div>
        <div className="container mt-5">
      <Typography variant="h1">React Contact Form Component Example</Typography>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <Typography variant="body1" htmlFor="name">
            Name
          </Typography>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <Typography className="form-Typography" htmlFor="email">
            Email
          </Typography>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <Typography className="form-Typography" htmlFor="message">
            Message
          </Typography>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>



    </div>
  )
}

export default contactform