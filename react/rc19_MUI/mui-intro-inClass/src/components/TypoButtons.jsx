import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

//! tüm kütüphane içerisinden ilgili alt componetni cikartir.
//! Performans olarak daha problemli
// import { Typography } from '@mui/material';

const TypoButtons = () => {
  return (
    <div>
      <Typography variant="h5" component="h3" color="turquoise" align="center">
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
    </div>
  )
}

export default TypoButtons
