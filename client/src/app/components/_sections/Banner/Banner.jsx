'use client';

import { getBanner } from '@/api';
import { getFileUrl } from '@/utils/getFileUrl';
import { useEffect, useState } from 'react';

const Banner = ({ path }) => {
  return (
    <div style={{}}>
      {path && (
        <video autoPlay loop muted preload="auto" width="100%">
          <source src={getFileUrl(path)} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Banner;
