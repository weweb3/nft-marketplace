import Link from 'next/link'
import { useState } from 'react'
import { AiFillCheckCircle, AiFillHeart } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import SocialMedia from '../Footer/SocialMedia'

export default function CardItem(props: any) {
  const [displayBlock, setDisplayBlock] = useState(false)
  const [heart, setHeart] = useState(false)

  function toggleOpenBlock() {
    setDisplayBlock(!displayBlock)
  }
  function toggleLikeWithHeart() {
    setHeart(!heart)
  }

  return (
    <div
      onMouseLeave={() => setDisplayBlock(false)}
      className="card w-auto shadow-xl bg-base-300 md:p-5"
    >
      <figure className="px-8 pt-10">
        <div className="flex justify-center items-center relative w-[255px] h-[264px]">
          <div
            className={`absolute inset-0 ${
              displayBlock ? 'flex' : 'hidden'
            } items-center justify-center  rounded-lg z-10`}
            style={{ background: 'rgba(0,0,0,.5)' }}
          >
            <div>
              <button
                onClick={toggleOpenBlock}
                className="btn bg-indigo-700 border-none hover:bg-indigo-800 w-full"
              >
                Buy now
              </button>
              <h1 className="text-center text-white font-bold text-lg mt-5">
                Share
              </h1>
              <div className="mt-5">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="w-full h-full z-0">
            {/* eslint-disable-next-line  */}
            <img
              src={props.nft}
              style={{ objectFit: 'cover' }}
              alt={props.nftTitle}
              className="w-full h-full rounded-xl shadow-md relative cursor-pointer hover:transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div className="avatar absolute top-2 left-2 md:top-5 md:left-5 hover:scale-105 z-20">
          <div className="cursor-pointer w-14 md:w-16 rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2">
            {/* eslint-disable-next-line  */}
            <img src={props.avatar} />
            <AiFillCheckCircle className="h-5 w-5 text-indigo-700 bg-white rounded-full absolute right-0 bottom-0" />
          </div>
        </div>

        <div className="absolute top-2 right-1 z-20">
          <div className="cursor-pointer w-auto rounded-lg">
            {/* eslint-disable-next-line  */}
            <div className="badge bg-indigo-800 border-4 border-indigo-600 rounded-2xl p-4">
              <span className="text-lg font-bold text-white">
                {props.auctionEndInTime}
              </span>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-gray-700 dark:text-white ">Shoes</h1>
          <FiMoreHorizontal
            onClick={toggleOpenBlock}
            className="w-8 h-8 text-base-content cursor-pointer hover:bg-gray-400 rounded-full"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold text-gray-500">{props.price}</h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-blue-400">
            <Link href={'/'}>Place a bid</Link>
          </h1>
          <div
            className={`flex items-center  ${
              heart ? 'text-red-400' : 'text-gray-500'
            } cursor-pointer`}
            onClick={toggleLikeWithHeart}
          >
            <AiFillHeart className={`w-8 h-8`} />
            <div className="ml-1">{props.likes}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
