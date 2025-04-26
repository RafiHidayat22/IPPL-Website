import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Jelajah.css'
import gambar1 from '../../assets/Jelajah1.png'
import gambar2 from '../../assets/mapjelajah.png'
import VideoPlayer from './vidPlayer'

const Jelajah = () =>{
    return(
        <div className='main-jelajah'>
            <Header/>
            <main className='layout'>
                <div className='section1'>
                    <span className='section1-left'>
                        <h1>Jelajah Warisan Budaya</h1>
                        <h3>Temukan Lokasi Bersejarah, ikuti virtual tur, dan kenali budaya lokal lebih dekat</h3>
                    </span>
                    <span className='section1-right'>
                        <img src={gambar1} alt="gambar1" className='img1-jelajah'/>
                    </span>
                </div>

                <div className='section2'>
                    <h1>Tur Video Budaya</h1>
                    <img src={gambar2} alt="map" className='img2-jelajah' />
                </div>

                <div className='section3'>
                    <span className='section3-top'>
                        <h1>Menelusuri Benteng Pendem Cilacap</h1>
                        <h3>Benteng Pendem Cilacap adalah benteng peninggalan Belanda yang dibangun pada abad ke-19 untuk pertahanan militer di pesisir selatan Jawa. </h3>
                        <h3>Kini, benteng ini menjadi destinasi wisata sejarah yang menampilkan reruntuhan bangunan, terowongan, dan meriam kuno.</h3>
                    </span>
                    <span className='section3-btm'>
                        <VideoPlayer url="https://youtu.be/HtncWDOCv2w?si=HE7Jg8vZWBoIkYrg" />
                    </span>
                </div>

                <div className='section4'>
                    <span className='section4-top'>
                        <h1>Menelusuri Benteng Pendem Cilacap</h1>
                        <h3>Benteng Pendem Cilacap adalah benteng peninggalan Belanda yang dibangun pada abad ke-19 untuk pertahanan militer di pesisir selatan Jawa. </h3>
                        <h3>Kini, benteng ini menjadi destinasi wisata sejarah yang menampilkan reruntuhan bangunan, terowongan, dan meriam kuno.</h3>
                    </span>
                    <span className='section4-btm'>
                        <VideoPlayer url="https://youtu.be/MwtpXXIBrpU?si=60lCOUkKu1wbJq4Z" />
                    </span>
                </div>

            </main>
            <Footer/>

        </div>
    )
}

export default Jelajah