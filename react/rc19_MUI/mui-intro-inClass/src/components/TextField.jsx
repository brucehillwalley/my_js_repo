import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"

const TextFieldComp = () => {
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
        color="warning"
        required
        fullWidth
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
      />
    </Container>
  )
}

export default TextFieldComp
