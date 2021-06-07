import { useState } from 'react';

export default function A() {
  const [value, setValue] = useState('아직 안바뀜');

  const handleClick = () => {
    setValue('E의 값을 변경');
  };

  return (
    <div>
      <B value={value} />
      <button onClick={handleClick}>E의 값을 바꾸기</button>
    </div>
  );
}

function B({ value }) {
  return (
    <div>
      <p>여긴 B</p>
      <C value={value} />
    </div>
  );
}

function C({ value }) {
  return (
    <div>
      <p>여긴 C</p>
      <D value={value} />
    </div>
  );
}

function D({ value }) {
  return (
    <div>
      <p>여긴 C</p>
      <E value={value} />
    </div>
  );
}

function E({ value }) {
  return (
    <div>
      <p>여긴 E</p>
      <h3>{value}</h3>
    </div>
  );
}
