import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <div>
       <Box position="relative" height="100vh" >
        <Image
          src='https://static.vecteezy.com/system/resources/previews/005/419/000/original/illustration-of-good-time-management-to-reach-the-target-goal-organize-schedule-people-checking-the-to-do-list-can-be-used-for-presentation-web-landing-page-apps-animation-social-media-etc-vector.jpg'
          objectFit="cover"
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        />
      </Box>
    </div>
  )
}
