import { FilterContainer } from './FilterContainer';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const FilterSection = ({ changeFilter }) => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.main',
        color: 'text.primary',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      }}
    >
      <FilterContainer>
        <Typography
          variant="h6"
          component="h2"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          Filter
        </Typography>
        <TextField
          id="filter"
          variant="outlined"
          size="small"
          sx={{ ml: 3 }}
          onChange={changeFilter}
        />
      </FilterContainer>
    </Box>
  );
};