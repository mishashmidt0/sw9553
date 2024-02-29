import React, { useState } from 'react';

import { moveZerosUtil } from '@/src/utils/move-zeros.util';

const ArrayInputForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [arrayValue, setArrayValue] = useState<string[]>([]);
  const [result, setResult] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddToArr = () => {
    setArrayValue((prev) => [...prev, inputValue]);
    setInputValue('');
  };

  const handleMoveZeros = () => {
    const result = moveZerosUtil(arrayValue);

    setArrayValue([]);
    setResult(result);
  };

  const clear = () => {
    setResult([]);
    setArrayValue([]);
  };

  return (
    <div className={'flex w-[500px] flex-col gap-4 p-10'}>
      <input
        className={'mx-4 border text-black'}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddToArr}>Add to array</button>
      <div className={'flex justify-between'}>
        <button onClick={clear} className={'rounded bg-neutral-400/10 p-4'}>
          Clear
        </button>
        <button onClick={handleMoveZeros} className={'rounded bg-green-400/10 p-4'}>
          Move Zeros
        </button>
      </div>

      <div>Result: {result.join(', ')}</div>
    </div>
  );
};

export default ArrayInputForm;
