// import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos, Loader } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VedioDetail = () => {
  const [videoDetail_, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]));
  }, [id]);


  if(!videoDetail_?.snippet) return <Loader />;
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail_;


  return (
    // <>
    // <h1>Hello</h1>


    // </>
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }} >
        <Box flex={1}>
          <Box sx ={{width: '100%', position: 'sticky', top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />

            <Typography color="#fff" variant="h5">
              {title}
            </Typography>
            <Typography color="#fff" variant="h5">
              {viewCount}
            </Typography>
            <Typography color="#fff" variant="h5">
              {likeCount}
            </Typography>
          </Box>

        </Box>

      </Stack>
    </Box>
  )
}

export default VedioDetail