import { useState } from 'react';

import Select from '@/src/component/select';
import { SELECT_INIT } from '@/src/const/select.const';

export const CustomSelect = () => {
  const [value, setValue] = useState<string>('ACCOUNT');

  return (
    <div className={'p-10'}>
      <Select options={SELECT_INIT} onChange={setValue} value={value} />
    </div>
  );
};
