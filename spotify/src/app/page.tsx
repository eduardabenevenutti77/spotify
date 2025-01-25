import { Home as HomeIcon, Search, LibraryBig, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic, LayoutList, Laptop, Volume2, Maximize2 } from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    // com o h-screen irá ocupar a tela toda
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <LibraryBig />
              Your library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>livro: o sol é para todos</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>gym</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Festa junina 13/06</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Inglês do Zero</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Listening Time: English Practice</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>TED Talks Daily</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Thinking in English</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Real Emglish Conversation Podcast</a>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4'>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors mt-4'>
              <Image src="/hj.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Sertanejo</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-300 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors mt-4'>
              <Image src="/hj.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Sertanejo</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-300 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors mt-4'>
              <Image src="/hj.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Sertanejo</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-300 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors mt-4'>
              <Image src="/hj.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Sertanejo</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-300 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors mt-4'>
              <Image src="/hj.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Sertanejo</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-300 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors mt-4'>
              <Image src="/hj.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Sertanejo</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-300 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <h1 className='font-semibold text-xl mt-6'>Made for Maria Eduarda Benevenutti</h1>

          </div>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 flex flex-col p-3 rounded-md hover:bg-white/10'>
              <Image src="/hj.jpg" className='w-full' width={104} height={104} alt="Capa do álbum" />
              <strong className='font-semibold mt-4'>Sertanejo</strong>
              <span className='text-sx text-zinc-500'>Henrique e Juliano</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col p-2 rounded-md hover:bg-white/10'>
              <Image src="/hj.jpg" className='w-full' width={104} height={104} alt="Capa do álbum" />
            </a>
            <a href='#' className='bg-white/5 flex flex-col p-2 rounded-md hover:bg-white/10'>
              <Image src="/hj.jpg" className='w-full' width={104} height={104} alt="Capa do álbum" />
            </a>
            <a href='#' className='bg-white/5 flex flex-col p-2 rounded-md hover:bg-white/10'>
              <Image src="/hj.jpg" className='w-full' width={104} height={104} alt="Capa do álbum" />
            </a>
            <a href='#' className='bg-white/5 flex flex-col p-2 rounded-md hover:bg-white/10'>
              <Image src="/hj.jpg" className='w-full' width={104} height={104} alt="Capa do álbum" />
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 px-6 pw-6 border-t border-zinc-700 p-6 flex items-center gap-3 justify-between">
        <div className='flex items-center gap-1'>
          <Image src="/hj.jpg" width={60} height={60} alt="Capa do álbum" />
          <div className="flex flex-col">
            <strong className='font-normal'>Arco Iris Preto e Branco - Ao Vivo</strong>
            <span className='text-xs text-zinc-400'>Jads & Jadson</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-4'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>
            <Play className='w-8 h-8  flex items-center pl-1 justify-center rounded-full bg-white text-black'/>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:47</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Mic size={20}/>
          <LayoutList size={20} />
          <Laptop size={20} />
          <div className='flex items-center gap-2'>
            <Volume2 size={20} />
            <div className='h-1 rounded-full w-20 bg-zinc-600'>
              <div className='bg-zinc-200 w-5 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
