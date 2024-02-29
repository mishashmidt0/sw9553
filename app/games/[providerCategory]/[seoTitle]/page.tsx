import Image from 'next/image';

import { fetchGamesData } from '@/src/query/game';

interface Props {
  providerCategory: string;
  seoTitle: string;
}

export async function generateStaticParams() {
  const games = await fetchGamesData();

  return games.map((game) => ({
    provider_category: [game.provider, ...game.categories],
    seoTitle: game.seo_title,
  }));
}

export default async function Page({ params }: { params: Props }) {
  const data = await fetchGamesData();
  const { seoTitle, providerCategory } = params;

  const currentGame = data.find(
    (game) =>
      game.seo_title === seoTitle &&
      (game.provider === providerCategory || game.categories?.includes(providerCategory)),
  );

  return (
    <div className={'mx-auto flex min-w-[480px] flex-col items-center gap-4'}>
      <Image
        className={'size-[300px] rounded-lg bg-neutral-300/10'}
        width={300}
        height={300}
        src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${currentGame?.identifier}.webp`}
        alt={currentGame?.title || 'gameImage'}
      />
      <p>
        <b>Название:</b> {currentGame?.title}
      </p>
      <p>
        <b>Провайдер:</b> {providerCategory}
      </p>

      <div className={'flex gap-4'}>
        <p>
          <b>Список категорий игры:</b>
        </p>
        <p>{currentGame?.categories?.join(', ')}</p>
      </div>
    </div>
  );
}
