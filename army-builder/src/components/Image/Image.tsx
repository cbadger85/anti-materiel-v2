import React from 'react';
import images from '../../images';

const Image: React.FC<ImageProps> = ({ imageName, ...props }) => {
  const Component = images[imageName];

  return Component ? <Component {...props} /> : null;
};

export default Image;

interface ImageProps {
  imageName: string;
  width?: number;
  height?: number;
}
