import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react'

const steps = [
    "Placed",
    'Order Confirmed',
    'Shipped',
    'Out For Delivery',
    'Delivered'
  ];


const OrderTracker = ({activeStep}) => {
  return (
    <Box sx={{ width: '100%' }} >
      
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel  sx={{ color: '#9155FD',fontSize: '100px' }}  className={``}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default OrderTracker