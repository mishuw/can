import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useLanyard } from "react-use-lanyard";

export default function Home() {
  const router = useRouter();
  const [can, setCan] = useState({});
  const [tech, setTech] = useState({});
  const [load, setLoad] = useState(true);

  const {loading, status} = useLanyard({
    userId: "553920839054262272",
    socket: true,
  });

  useEffect(() => {
    (async() => {
      if(loading) return;
      setCan(status);
      setLoad(false);
    })();
  }, [loading, status]);

  useEffect(() => {
    (async() => {
      let _ = await fetch('/api/techs').then(r => r.json());
      setTech(_ || {});
    })();
  }, [router]);
  let avUrl = `https://cdn.discordapp.com/avatars/${can?.discord_user?.id}/${can?.discord_user?.avatar}${can?.discord_user?.avatar?.startsWith('a_') ? '.gif' : '.png'}?size=4096`;
  return (
    <>
      {load ? (
        <div className="space-y-14 mb-10 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12" >
          <div className="loading">
            <div className="loader"><span></span></div>
          </div>
        </div>
      ) : (
        <div className="space-y-14 mb-10 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12 animate-bottom" >
        <section className="about">
        <header className="rounded-mb flex flex-col-reverse my-16 mx-4 py-10 justify-between md:flex-row md:items-center animate-bottom">
          <div className="md:w-8/12" >
            <div className="space-y-2">
              <div className="font-semibold text-xl text-neutral-700 md:text-3xl dark:text-neutral-200">
                <h1 className="text-white">{can?.discord_user?.username}</h1>
              </div>
              <p className="text-neutral-500" style={{fontWeight: '400px'}}>Selamlar İsmim <span className='username'>Can</span> 2001 Ankara doğumluyum çok küçük yaşlardan belli yazılım içersindeyim 8 yıldır yazılım ile içli dışlıyım uzmanlık alanlarımı görmek için Aşağıya kaydırabilirsiniz.</p>
            </div>
            <div className="flex items-center space-x-2 rounded-md text-neutral-500 mt-4">
              <div className={"h-5 w-5 rounded-full flex-shrink-0 status-"+can?.discord_status}></div>
              <div className="text-sm leading-tight truncate">{can?.discord_status.replace('online', 'Çevrimiçi').replace('idle', 'Boşta').replace('dnd', 'Rahatsız Etmeyin').replace('offline', 'Çevrimdışı')}</div>
            </div>
          </div>
          <div className="rounded-full mb-4 md:mb-0 avatar" style={{
                backgroundImage: `url(${avUrl})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center center'
                }}>
            <div className={"rounded-full h-30 w-30 pulse-avatar-"+can?.discord_status}>
              <img src={avUrl} alt="avatar" className='rounded-full invisible' />
            </div>
          </div>
          </header>
        <section>
          <h5 className="border-gray-400/10 dark:border-neutral-600/10 text-gray-400 dark:text-neutral-600/70 text-lg mx-4 mb-4 pb-2 font-medium">Bağlantılar</h5>
            <div className="grid px-4 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
              <a href="https://instagram.com/canbagir23" target={'_blank'}>
              <div className="connection-box text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center overflow-hidden dark:hover:bg-neutral-600/15 text-white">
                <div className="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center">
                  <img src="/static/Instagram_icon.png" alt="instagram_ico" className="connection-box-img"/>
                </div>
                <span className="flex-1 dark:text-neutral-500 truncate">Instagram</span>
              </div>
              </a>
              <a href={"https://discord.com/users/"+can?.discord_user?.id} target={'_blank'}>
              <div className="connection-box text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center overflow-hidden dark:hover:bg-neutral-600/15 text-white">
                <div className="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center">
                  <img src="/static/Discord_icon.png" alt="discord_ico" className="connection-box-img"/>
                </div>
                <span className="flex-1 dark:text-neutral-500 truncate">Discord</span>
              </div>
              </a>
            </div>
        </section>
      </section>
      </div>
      )
      }
    </>
  )
}