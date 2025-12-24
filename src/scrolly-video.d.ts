declare module 'scrolly-video/dist/ScrollyVideo.esm.jsx' {
  import { ComponentType, ReactNode } from 'react';
  
  interface ScrollyVideoProps {
    src: string;
    frame?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
    [key: string]: any;
  }
  
  const ScrollyVideo: ComponentType<ScrollyVideoProps>;
  export default ScrollyVideo;
}

