import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { IAlertSettings } from '../../models/userData';

interface IAlertProps {
  settings: IAlertSettings | undefined;
  onClose: () => void;
}

const AlertModal: React.FC<IAlertProps> = ({ settings, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Alert
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{
          position: 'absolute',
          left: 'calc(50% - 141px)',
          top: '12%',
          width: 250,
        }}
        severity={settings?.severity}
      >
        {settings?.message}
      </Alert>
    </Box>
  );
};

export { AlertModal };
