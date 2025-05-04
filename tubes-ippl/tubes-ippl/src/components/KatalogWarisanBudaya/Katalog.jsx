import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Katalog.css'
import gambar1 from '../../assets/Katalog1.png'
import gambar2 from '../../assets/Katalog2.png'
import gambar3 from '../../assets/Katalog3.png'

const Katalog = () => {
    return(
        <div className='main-katalog'>
            <Header/>
            <main className='layout'>
                <div className='katalog-container'>
                    <h1 className='katalog-title'>KATALOG WARISAN BUDAYA</h1>
                    
                    <div className='katalog-card'>
                        <img src={gambar1} alt="Legenda Baturaden" className='katalog-image'/>
                        <h3 className='video-title'>Tonton Video Cerita Rakyat Legenda Baturaden</h3>
                        <button className='katalog-button'>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar2} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Begalan, Tradisi Pernikahan Rakyat Banyumas</h3>
                        <button className='katalog-button'>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar3} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Begalan, Tradisi Pernikahan Rakyat Banyumas</h3>
                        <button className='katalog-button'>Selengkapnya</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Katalog