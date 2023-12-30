import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

//! tüm kütüphane içerisinden ilgili alt componetni cikartir.
//! Performans olarak daha problemli
// import { Typography } from '@mui/material';

const TypoButtons = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          border: "1px solid red",
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          color="turquoise"
          align="center"
        >
          Deneme
        </Typography>

        <Typography variant="body1" color="violet" align="center">
          bu bir elementidir
        </Typography>

        <Typography variant="body2" color="#dc143c" align="center">
          bu bir elementidir
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color={"fuchsia"}
          mt={3}
          sx={{ color: "white", backgroundColor: "tomato", p: 2 }}
        >
          bu bir elementidir
        </Typography>

        {/* h6 */}
        <Typography variant="subtitle2" align="center">
          bu bir elementidir
        </Typography>

        {/* span */}
        <Typography variant="button" align="center">
          bu bir elementidir
        </Typography>

        <div>
          {/* span */}
          <Typography variant="caption" align="center">
            bu bir elementidir
          </Typography>
        </div>
      </Box>
      <Stack direction={"row"} mt={4} spacing={2} justifyContent={"center"}>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
        <Button variant="outlined" color="warning">
          Outlined
        </Button>
        <Button variant="outlined" color="success">
          Outlined
        </Button>

        <Button variant="contained" color="primary">
          Outlined
        </Button>
      </Stack>
    </>
  )
}

export default TypoButtons
