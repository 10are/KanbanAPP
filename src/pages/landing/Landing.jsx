import React from 'react';

const Landing = () => {
  return (
    <div className=" flex items-center justify-center pt-36 pb-28 relative z-10">
      <div className="w-full  max-w-[1190px]  px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl bg-[#B35B76]/60 min-h-[300px] m-2 shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.21)]">
        <h1 className="font-semibold text-2xl mb-2 tracking-wider drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">Business School</h1>
        <small className="font-[500]">The Business School of
          the Future Has Arrived</small>
        <ul className="flex items-start justify-between gap-8 mt-10 md:flex-row flex-col">
          <li className="w-full lg:w-[32%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in">
            <h2 className="text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">Kurslar Sidebar Blok</h2>
            <p className="text-center tracking-tighter block mb-14">
              <span className="text-4xl font-bold">$250</span>
              <span className="text-black/40 text-center">/mo</span>
            </p>
            <button className="w-full p-2 bg-[#13181f] text-white rounded-md font-semibold hover:bg-[#ff2865] transition-all duration-150 ease-in mb-8 border-[#13181f]">sepete ekle</button>
            <ol className="list-disc text-[#ff2865] w-[80%] mx-auto">
              <li><span className="text-black text-xs font-semibold">439,000 Tahmini İzlenim</span></li>
              <li><span className="text-black text-xs font-semibold">180 x 150</span></li>
              <li><span className="text-black text-xs font-semibold">Orta Sağ</span></li>
            </ol>
          </li>
          <li className="w-full lg:w-[32%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in">
            <h2 className="text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">Kurslar Sidebar Blok</h2>
            <p className="text-center tracking-tighter block mb-14">
              <span className="text-4xl font-bold">$250</span>
              <span className="text-black/40 text-center">/mo</span>
            </p>
            <button className="w-full p-2 bg-[#13181f] text-white rounded-md font-semibold hover:bg-[#ff2865] transition-all duration-150 ease-in mb-8 border-[#13181f]">sepete ekle</button>
            <ol className="list-disc text-[#ff2865] w-[80%] mx-auto">
              <li><span className="text-black text-xs font-semibold">439,000 Tahmini İzlenim</span></li>
              <li><span className="text-black text-xs font-semibold">180 x 150</span></li>
              <li><span className="text-black text-xs font-semibold">Orta Sağ</span></li>
            </ol>
          </li>
          <li className="w-full lg:w-[32%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in">
            <h2 className="text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">Kurslar Sidebar Blok</h2>
            <p className="text-center tracking-tighter block mb-14">
              <span className="text-4xl font-bold">$250</span>
              <span className="text-black/40 text-center">/mo</span>
            </p>
            <button className="w-full p-2 bg-[#13181f] text-white rounded-md font-semibold hover:bg-[#ff2865] transition-all duration-150 ease-in mb-8 border-[#13181f]">sepete ekle</button>
            <ol className="list-disc text-[#ff2865] w-[80%] mx-auto">
              <li><span className="text-black text-xs font-semibold">439,000 Tahmini İzlenim</span></li>
              <li><span className="text-black text-xs font-semibold">180 x 150</span></li>
              <li><span className="text-black text-xs font-semibold">Orta Sağ</span></li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Landing;
