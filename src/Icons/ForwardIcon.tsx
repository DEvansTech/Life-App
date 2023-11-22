import React from 'react';
import { SvgXml, XmlProps } from 'react-native-svg';

interface Props extends Omit<XmlProps, 'xml'> {
  size: number;
  color: string;
}

const ForwardIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <SvgXml
      xml={`
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 19" fill="none">
        <path d="M24 0.5L21.3333 0.5L21.3333 5.64286C21.3333 6.71429 20.9444 7.625 20.1667 8.375C19.3889 9.125 18.4444 9.5 17.3333 9.5L5.06667 9.5L9.86667 4.87143L8 3.07143L6.74404e-07 10.7857L8 18.5L9.86667 16.7L5.06667 12.0714L17.3333 12.0714C19.1778 12.0714 20.7498 11.4449 22.0493 10.1917C23.3498 8.93771 24 7.42143 24 5.64286L24 0.5Z" fill="${color}"/>
      </svg>
      `}
    />
  )
}

export default ForwardIcon;