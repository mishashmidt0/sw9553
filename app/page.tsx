'use client';

import ArrayInputForm from '@/src/container/array-Input-form';
import { CustomSelect } from '@/src/container/custom-select';
import { GameLists } from '@/src/container/game-lists';

export default function Home() {
  return (
    <main className={'flex gap-20'}>
      <ArrayInputForm />
      <CustomSelect />
      <GameLists />
    </main>
  );
}
