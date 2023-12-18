import Image from 'next/image';
import { fetchBanner } from '@/lib/data';

const Home = async () => {
  const banner = await fetchBanner();

  return (
    <main>
      {/* {banner.map((ban) => (
        <section
          key={ban.id}
          className="relative max-w-screen-xl mx-auto flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${ban.imgUrl})`, height: '700px' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl animate__animated animate__fadeIn animate__delay-1s transition duration-500">
              {ban.title}
            </h2>
            <p className="text-xl mt-4 text-gray-400 animate__animated animate__fadeIn animate__delay-2s transition duration-500">
              {ban.desc}
            </p>
          </div>
        </section>
      ))} */}
      homePage  
    </main>
  );
};

export default Home;
