import { useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Collections } from '../../assets/collections';
import { Photos } from '../../assets/photos';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const navigate = useNavigate()

  return (
    <>
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="title" className="text-3xl md:text-5xl font-bold mb-6"
            data-aos="fade-down">Capture the Drive, Relive the Moment</h1>
          <p className="text-xl md:text-1xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            A personal collection of photos from car meets I've captured.
          </p>
        </div>
      </header>
      <div className="m-5 grid grid-cols-1 md:grid-cols-7 md:ps-4">
        {Collections.map((item) => (
          <div key={item.id} className="collection-item rounded-lg overflow-hidden shadow-md md:me-4 mb-4" onClick={() => (navigate(`collection/${item.id}`))} data-aos="zoom-in">
            <div className="w-full h-40 overflow-hidden">
              <img src={item.image} className="w-full object-cover"></img>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-sm mt-2 text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-500">{`${Photos[item.id as keyof typeof Photos]?.length} photos`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}