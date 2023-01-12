import Image from 'next/image';
import React, { useState } from 'react';
import image from '../public/favicon.ico';
function User() {
  const [imageSrc, setImageSrc] = useState(
    'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjktOTU1ODZjYzBhMTk0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg'
  );
  return (
    <label>
      <Image src={imageSrc} width='400px' height='400px' />
      <input type='image' />
    </label>
  );
}

export default User;
