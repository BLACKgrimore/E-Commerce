import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { StepLabel } from '@mui/material';
import Deliveryaddressform from './deliveryaddressform';
import Ordersummary from './ordersummary';

const steps = ['Login', 'Delevery Address', "Order Summary", 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search)
  const step = querySearch.get("step")


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='px-10 lg:px-20 pt-10'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          
            <React.Fragment>

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>


              </Box>

              <div className='mt-10'>
                {step == 3 ? <Deliveryaddressform/> : <Ordersummary/>}
              </div>

              

            </React.Fragment>
          
        </div>
      </Box>
    </div>
  );
}
