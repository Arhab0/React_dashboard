import React,{useState} from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';


const SparkLine = ({width,data,height}) => {
  const [showHighlight, setShowHighlight] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleHighlightChange = (event) => {
    setShowHighlight(event.target.checked);
  };

  const handleTooltipChange = (event) => {
    setShowTooltip(event.target.checked);
  };

  const formattedData = data.map(point => point.yval);
  return (


  <Stack direction="column" sx={{ width: '100%' }}>
      <Stack direction="row">
        <FormControlLabel
          value="end"
          control={
            <Switch
              color="primary"
              checked={showHighlight}
              onChange={handleHighlightChange}
            />
          }
          label="showHighlight"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={
            <Switch
              color="primary"
              checked={showTooltip}
              onChange={handleTooltipChange}
            />
          }
          label="showTooltip"
          labelPlacement="end"
        />
      </Stack>
      <Stack direction="row" sx={{ width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart
            data={formattedData}
            height={100}
            showHighlight={showHighlight}
            showTooltip={showTooltip}
          />
        </Box>
      </Stack>
    </Stack>
  );

}

export default SparkLine


