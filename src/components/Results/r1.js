import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import './resultPage.css';

function ResultPage1() {
  const webUrl = "https://amazing-druid-c7be2d.netlify.app";
  const linkToXhs = "https://www.xiaohongshu.com/discovery/item/656c351e000000003a00ec76?app_platform=ios&app_version=8.17&noteAttributes=goods&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b8826c7eba41300018fb057&apptime=1702371087";
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Show a Snackbar or alert to inform the user the link has been copied
      setSnackbarOpen(true);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="result1-container" >
      <Stack
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{
          position: 'absolute',
          right: '20%',
          bottom: '10%',
          width: '60%',
          height: '60%'
        }}
      >
        <img
          src='/images/url-element.png'
          alt="WeChat"
          className='link-image'
          onClick={() => copyToClipboard(webUrl)}
          style={{ cursor: 'pointer' }} // Make it clear this is clickable
        />
        
        <a href={linkToXhs} target="_blank" rel="noopener noreferrer">
          <img src='/images/link-xhs-element.png' alt="XiaoHongShu" className='link-image'/>
        </a>
      </Stack>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          链接已复制!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ResultPage1;
