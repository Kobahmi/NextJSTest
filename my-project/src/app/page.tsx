import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen gap-4 p-24 text-4xl font-black text-red-400'>
      Layout responsive
      <Image
        src='/cat.jpeg'
        alt='cat sharp'
        className='invert'
        layout='responsive'
        width={100}
        height={24}
      />
      Layout fixed
      <Image
        src='/cat.jpeg'
        className='w-full invert'
        alt='cat blurry'
        layout='fixed'
        width={100}
        height={24}
      />
      Image from imgur with max-width
      <Image
        src='https://i.imgur.com/CZPB3YN.jpg'
        alt='External Image Example'
        layout='responsive'
        width={100}
        height={24}
      />
    </main>
  );
}
