import { useEffect, useState } from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Download, X } from "react-feather";
import { Photos } from '../../assets/photos';
import { useParams } from 'react-router-dom';
import { Collections } from '../../assets/collections';

export const CollectionPage = () => {

  const { id } = useParams<{ id: string }>();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  console.log(id);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="title" className="text-3xl md:text-5xl font-bold mb-6"
            data-aos="fade-down">{Collections.find((item) => (item.id === id))?.title}</h1>
        </div>
      </header>
      <div className="m-5 grid grid-cols-1 md:grid-cols-7 md:ps-4">
        {Photos[id as keyof typeof Photos].map((item, index) => (
          <div key={item.filename} className="collection-item rounded-lg overflow-hidden shadow-md md:me-4 mb-4" data-aos="zoom-in">
            <div className="w-full h-40 overflow-hidden">
              <img src={item.thumb} onClick={() => setLightboxImage(item.filename)} className="w-full h-40 object-cover"></img>
            </div>
            <div className="flex items-center justify-between px-2 py-2">
              <h3 className="text-sm font-normal mt-2 text-gray-400">{item.date}</h3>
              <a
                href={item.filename}
                download={`${id}-Photo${index + 1}.jpg`}
                className="text-xs text-indigo-600 hover:text-indigo-800 underline"
              >
                <Download size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${import.meta.env.BASE_URL}${lightboxImage}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-4 -right-4 bg-black text-white rounded-full p-1 hover:bg-gray-800"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}