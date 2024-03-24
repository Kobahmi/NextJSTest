import TestImages from './components/testImages/testImages';
import YouTubeEmbed from './components/testVideos/testVideos';

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen gap-4 p-24 text-4xl font-black text-red-400'>
      ALLO
      <TestImages />
      <YouTubeEmbed videoId='dQw4w9WgXcQ' />
    </main>
  );
}
