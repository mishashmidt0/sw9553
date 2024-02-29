import { TGamesResponse } from '@/src/type/game.interface';

export const fetchGamesData = async (): Promise<TGamesResponse> => {
  const response = await fetch(
    'https://nextjs-test-pi-hazel-56.vercel.app/data/games.json',
    { cache: 'force-cache' },
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
