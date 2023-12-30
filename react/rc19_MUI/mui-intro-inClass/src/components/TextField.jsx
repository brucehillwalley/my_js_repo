import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import { useState } from "react"

const TextFieldComp = () => {

    const [error, setError] = useState(false)


  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 4, border: "1px solid red" }}
      align="center"
    >
      <TextField
        id="email"
        label="email"
        variant="outlined"
        placeholder="Enter your email"
        color="success"
        required
        fullWidth
        error={error}
        helperText={error && "incorrect email format"}
      />
      <TextField
        id="password"
        type="password"
        label="Filled"
        variant="filled"
        fullWidth
        margin="normal"
      />
      <TextField
        id="adress"
        label="adress"
        variant="standard"
        fullWidth
        type="text"
        margin="normal"
        helperText="Adress"
      />
    </Container>
  )
}

export default TextFieldComp
