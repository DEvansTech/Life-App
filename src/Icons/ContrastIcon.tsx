import React from 'react';
import { SvgXml, XmlProps } from 'react-native-svg';

interface Props extends Omit<XmlProps, 'xml'> {
  size: number;
  color: string;
}

const ContrastIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <SvgXml
      xml={`
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="${color}" stroke-width="2"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0V16Z" fill="${color}"/>
      </svg>
      `}
    />
  )
}

export default ContrastIcon;