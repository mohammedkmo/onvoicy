import React, { useState } from "react"
import Logo from '../images/logo.svg'
import Man from '../images/man.png'
import Espanol from '../images/Vector-1.png'
import Arabic from '../images/Vector-2.png'
import English from '../images/Vector-3.png'
import Chinese from '../images/Vector.png'
import Arrow from '../images/arrow.png'
import Split from '../images/split.svg'
import useSound from 'use-sound';
import ArabicVoice from '../voices/arabic.mp3';
import EspanolVoice from '../voices/Espanol.mp3';
import EnglishVoice from '../voices/english.mp3';
import ChineseVoice from '../voices/Chinese.mp3';
import PlayIcon from '../components/playIcon'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Helmet } from "react-helmet"



// markup
const IndexPage = () => {

  const [song, setSong] = useState('');
  const [play, { stop }] = useSound(song, {
    volume: 1
  });

  const [isPlaying, setPlaying] = useState(false);

  const [email, setEmail] = useState('')



  const handleMailchimp = async (e) => {
    e.preventDefault();
    await addToMailchimp(email)
      .then(data => {
        setEmail('')
        console.log(data)
      })
      .catch((e) => {

        console.log(e)

      })

  }


  const isItPlaying = () => {

    if (isPlaying) {
      stop();
      setPlaying(false)
    } else {
      play();
      setPlaying(true)
    }

  }


  return (
    <main>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Onvoicy.com</title>
        <link rel="canonical" href="http://onvoicy.com" />
      </Helmet>

      <div className="bg-white">
        <div className="container max-w-full header_bg">


          <div className="max-w-screen-xl m-auto">
            <div className="flex flex-row justify-between pt-5 pl-4 lg:pl-0 items-center">
              <div className="flex flex-col">
                <img src={Logo} alt="logo" width="180" />
              </div>
              <div className="flex flex-col hidden lg:block">

                <h1 className="text-white text-lg	">coming soon</h1>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-20 items-center lg:items-end ">
              <div className="flex flex-col px-4 lg:px-0 w-full lg:w-6/12 flex-wrap mb-20">
                <h1 className="text-white text-3xl font-bold	">Voices that Amplify your Content</h1>
                <p className="text-white mt-2">Go from text to speech with a versatile AI voice generator Now make studio-quality voice overs in minutes. Use onvoicy’s lifelike AI voices for podcasts, videos, and all your professional presentations.</p>


              </div>
              <div className="flex flex-col px-4 lg:px-0 w-full lg:w-6/12 items-end relative">




                <form className="m-4 flex flex-col items-start absolute bottom-4 lg:bottom-12 right-0">
                  <p className="text-white  w-full lg:w-96	">To be able to share with you our latest news, subscribe to our newsletter</p>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" autoComplete="on" className="rounded-l-lg py-4 pl-4 pr-3 w-full pr-48 mr-0	mt-1 text-white subscribe_form relative" placeholder="your@mail.com" />
                  <button name="subscribe" className="px-8 rounded-r-lg email_btn text-white font-bold p-3 absolute right-1 bottom-1" onClick={handleMailchimp}>Subscribe</button>
                </form>

                <img src={Man} alt="logo" width="430" />

              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-40 flex flex-col items-center lg:h-5/6		text-center bg-2-sec justify-center">
          <div className="max-w-screen-xl">

            <h1 className="text-3xl font-bold">Use the Best Text to Speech AI Voices</h1>
            <img className="mt-1 m-auto" src={Split} alt="" />
            <p className="mt-4  px-4 lg:px-0 lg:w-6/12	m-auto">Choose from a growing library of 200+ natural sounding voices with humanlike intonation in 30+ languages and accents powered by machine learning technology.</p>



            <div className="flex px-4 lg:px-0 space-x-2 lg:space-x-6 items-center justify-center mt-16 relative">

              <div className="absolute left-1/4 -top-10 hidden lg:block">
                <img className="static" src={Arrow} alt="" width="140" />
                <p className="hand-font absolute -left-20 botton-0">click and listen</p>
              </div>


              <div className="flex flex-col">

                <div className="relative">
                  <img className="play-image" src={Espanol} alt="" width="100" />
                  <div className=" absolute top-0 right-0  play">
                    <button name="play1" className="rounded-full p-2 w-10 h-10 back-drop text-white text-start" onMouseDown={() => setSong(EspanolVoice)} onClick={isItPlaying}>
                      <PlayIcon isPlaying={isPlaying}> </PlayIcon>
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 mt-1">Español</p>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <img className="play-image" src={English} alt="" width="100" />
                  <div className=" absolute top-0 right-0  play">
                    <button name="play2" className="rounded-full p-2 w-10 h-10 back-drop text-white text-start" onMouseDown={() => setSong(EnglishVoice)} onClick={isItPlaying}>
                      <PlayIcon isPlaying={isPlaying}> </PlayIcon>
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 mt-1">English</p>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <img className="play-image" src={Arabic} alt="" width="100" />
                  <div className=" absolute top-0 right-0  play">
                    <button name="play3" className="rounded-full p-2 w-10 h-10 back-drop text-white text-start" onMouseDown={() => setSong(ArabicVoice)} onClick={isItPlaying}>
                      <PlayIcon isPlaying={isPlaying}> </PlayIcon>
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 mt-1 arabic-text">عربي</p>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <img className="play-image" src={Chinese} alt="" width="100" />
                  <div className=" absolute top-0 right-0  play">
                    <button name="play4" className="rounded-full p-2 w-10 h-10 back-drop text-white text-start" onMouseDown={() => setSong(ChineseVoice)} onClick={isItPlaying}>
                      <PlayIcon isPlaying={isPlaying}> </PlayIcon>
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 mt-1">中国人</p>
              </div>
            </div>
          </div>
        </div>

        <p className="m-auto text-center mb-10">made with love By <a className="brand-text-color" href="https://onvoicy.com">onvoicy.com</a></p>
      </div>
    </main>
  )
}

export default IndexPage
