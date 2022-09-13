/* import { FaBeer } from 'react-icons/fa'; */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.main',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Typography
            variant="h5"
            component="h2"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            404 Page not found
          </Typography>
     {/*  <FaBeer size="256px" /> */}
    </Box>
  );
}