import Link from 'next/link';
import { useEffect, useState } from 'react';

import { fetchGamesData } from '@/src/query/game';
import { TGamesResponse } from '@/src/type/game.interface';

export const GameLists = () => {
  const [games, setGames] = useState<TGamesResponse>([]);

  const getGames = async () => {
    const games = await fetchGamesData();
    setGames(games);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className={'min-w-[480px] space-y-2 p-10'}>
      {games.slice(0, 25).map((game) => (
        <Link
          href={`/games/${game.provider}/${game.seo_title}`}
          key={game.identifier}
          className={'flex gap-2 transition-colors hover:text-blue-500'}
        >
          <p className={'whitespace-nowrap'}>{game.title}</p>
          <p className={'whitespace-nowrap'}>{game.seo_title}</p>
        </Link>
      ))}
    </div>
  );
};
