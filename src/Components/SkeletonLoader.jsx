import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function SkeletonLoader() {
  return (
    <Box sx={{ width: '100%', height: '100vh', backgroundColor: '#333' }}>
      <Skeleton variant="rectangular" width="100%" height={64} sx={{ bgcolor: 'grey.500' }} />
      
      <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
        <Box sx={{ width: 250, padding: 2 }}>
          {Array.from(new Array(10)).map((_, index) => (
            <Skeleton key={index} variant="rectangular" width="100%" height={40} sx={{ marginBottom: 1, bgcolor: 'grey.800' }} />
          ))}
        </Box>
        
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Skeleton variant="rectangular" width="100%" height="100%" sx={{ bgcolor: 'grey.800' }} />
        </Box>
      </Box>
    </Box>
  );
}
