import React from 'react';

const MyParticles = () => (

  <Particles
    canvasClassName="example"
    height="120px"
    width="300px"
    params={{
      polygon: {
        enable: true,
        type: 'inside',
        move: {
          radius: 10,
        },
        url: 'path/to/svg.svg',
      },
    }}
  />
);
