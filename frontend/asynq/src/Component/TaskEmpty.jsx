import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function TaskEmpty() {
  return (
    <Box position="relative" height="100vh" width="100vw">
      <Image 
        src='https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png'
        objectFit="cover"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
      />
    </Box>
  )
}
