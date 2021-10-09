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
import PlayIcon from '../components/playIcon';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Helmet } from "react-helmet";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEn from '../lang/en';
import translationAr from '../lang/ar';
import LiveChat from 'react-livechat';




i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  debug: true,
  resources: {
    en: { translation: translationEn },
    ar: { translation: translationAr }
  },
});




// markup
const IndexPage = () => {
  const { t } = useTranslation();
  const [song, setSong] = useState(EspanolVoice);
  const [play, { stop }] = useSound(song);

  const [espanolIsPlaying, setEspanolPlaying] = useState(false);
  const [englishIsPlaying, setEnglishPlaying] = useState(false);
  const [arabicIsPlaying, setArabicPlaying] = useState(false);
  const [chineseIsPlaying, setChinesePlaying] = useState(false);

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

  const ChangLang = () => {
    i18n.changeLanguage(t('anotherLangValue'))
  }

  const lang = t('lang');
  const dir = t('dir');

  return (
    <main>
      <Helmet htmlAttributes={{
        lang: lang,
        dir: dir
      }}>

        <meta charSet="utf-8" />
        <title>Onvoicy.com</title>
        <link rel="canonical" href="http://onvoicy.com" />
      

  

      </Helmet>


      <div className="bg-white">



        <div className="container max-w-full header_bg">


          <div className="max-w-screen-xl m-auto px-4">
            <div className="flex flex-row justify-between pt-5 items-center">
              <div className="flex flex-col">
                <img src={Logo} alt="logo" width="180" />
              </div>
              <div className="flex flex-col">

                <button onClick={ChangLang} className="text-white text-lg	flex">



                  <span>{t('anotherLang')}</span>

                  <span className="mx-1"></span>


                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>

                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-20 items-center lg:items-end ">
              <div className="flex flex-col  w-full lg:w-6/12 flex-wrap mb-20">
                <h1 className="text-green-200 text-lg	">{t('comingSoon')}</h1>
                <h1 className="text-white text-3xl font-bold mt-1	">{t('tagling')}</h1>
                <p className="text-white mt-2">{t('description')}</p>


              </div>
              <div className="flex flex-col px-4 lg:px-0 w-full lg:w-6/12 items-end relative">
                <form className="m-4 flex flex-col items-start absolute bottom-4 lg:bottom-12 start-0">
                  <p className="text-white  w-full lg:w-96	">{t('subDesc')}</p>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" autoComplete="on" className="rounded-l-lg py-4 pl-4 text-left pr-3 w-full pr-48 mr-0	mt-1 text-white subscribe_form relative" placeholder="your@mail.com" />
                  <button name="subscribe" className="px-8 rounded-r-lg email_btn text-white font-bold p-3 absolute right-1 bottom-1" onClick={handleMailchimp}>{t('subscribe')}</button>
                </form>

                <img src={Man} alt="logo" width="430" />

              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-40 flex flex-col items-center lg:h-5/6 px-4	text-center bg-2-sec justify-center">
          <div className="max-w-screen-xl">

            <h1 className="text-3xl font-bold px-4 m-auto lg:px-0 lg:w-6/12">{t('sec2Title')}</h1>
            <img className="mt-1 m-auto" src={Split} alt="" />
            <p className="mt-4  px-4 lg:px-0 lg:w-6/12	m-auto">{t('sec2Desc')}</p>

            <div className="relative w-max object-center m-auto">
              <div className="absolute -left-28 -top-8 hidden lg:block">
                <img className="relative" src={Arrow} alt="" width="140" />
                <p className="hand-font absolute -left-20 botton-0">{t('clickMe')}</p>
              </div>


              <div className="flex px-4 lg:px-0  items-center justify-center mt-16">




                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col m-4 lg:m-0 lg:mx-3">

                    <div className="relative">
                      <img className="play-image" src={Espanol} alt="" width="100" />
                      <div className=" absolute top-0 right-0  play">
                        <button name="play1" className="rounded-full p-2 w-10 h-10 back-drop text-white text-start"

                          onMouseDown={() => {

                            if (play) {
                              stop()
                            }

                            setEnglishPlaying(false);
                            setArabicPlaying(false);
                            setChinesePlaying(false);
                            setSong(EspanolVoice)
                          }}

                          onClick={() => {

                            espanolIsPlaying ? stop() : play();
                            setEspanolPlaying(!espanolIsPlaying);
                          }}

                        ><PlayIcon isPlaying={espanolIsPlaying}> </PlayIcon>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-500 mt-1">Español</p>
                  </div>
                  <div className="flex flex-col m-4 lg:m-0 lg:mx-3">
                    <div className="relative">
                      <img className="play-image" src={English} alt="" width="100" />
                      <div className=" absolute top-0 right-0  play">
                        <button name="play2" className="rounded-full p-2 w-10 h-10 back-drop text-white text-start"
                          onMouseDown={() => {
                            if (play) {
                              stop()
                            }

                            setArabicPlaying(false);
                            setChinesePlaying(false);
                            setEspanolPlaying(false);

                            setSong(EnglishVoice)
                          }}
                          onClick={() => {

                            englishIsPlaying ? stop() : play();
                            setEnglishPlaying(!englishIsPlaying);
                          }}> <PlayIcon isPlaying={englishIsPlaying}> </PlayIcon>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-500 mt-1">English</p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col m-4 lg:m-0 lg:mx-3">
                  <div className="relative">
                    <img className="play-image" src={Arabic} alt="" width="100" />
                    <div className=" absolute top-0 right-0  play">
                      <button name="play3" className="rounded-full p-2 w-10 h-10 back-drop text-white text-start"
                        onMouseDown={() => {
                          if (play) {
                            stop()
                          }
                          setEnglishPlaying(false);
                          setChinesePlaying(false);
                          setEspanolPlaying(false);
                          setSong(ArabicVoice)
                        }}
                        onClick={() => {

                          arabicIsPlaying ? stop() : play();
                          setArabicPlaying(!arabicIsPlaying);
                        }}>
                        <PlayIcon isPlaying={arabicIsPlaying}> </PlayIcon>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-1">عربي</p>
                </div>
                <div className="flex flex-col m-4 lg:m-0 lg:mx-3">
                  <div className="relative">
                    <img className="play-image" src={Chinese} alt="" width="100" />
                    <div className=" absolute top-0 right-0  play">
                      <button name="play4" className="rounded-full p-2 w-10 h-10 back-drop text-white text-start"
                        onMouseDown={() => {
                          if (play) {
                            stop()
                          }
                          setEnglishPlaying(false);
                          setArabicPlaying(false);
                          setEspanolPlaying(false);
                          stop()
                          setSong(ChineseVoice)
                        }}
                        onClick={() => {

                          chineseIsPlaying ? stop() : play();
                          setChinesePlaying(!chineseIsPlaying);
                        }}>
                        <PlayIcon isPlaying={chineseIsPlaying}> </PlayIcon>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-1">中国人</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="m-auto text-center mb-10">{t('copyright')} <a className="brand-text-color" href="https://onvoicy.com">onvoicy.com</a></p>
      </div>

      <LiveChat license={13189809} />
 
    </main>
  )
}

export default IndexPage
