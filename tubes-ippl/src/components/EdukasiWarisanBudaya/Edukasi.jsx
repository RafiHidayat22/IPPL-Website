import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Edukasi.css'
import gambar1 from '../../assets/Edukasi1.png'
import gambar2 from '../../assets/Edukasi2.png'
import gambar3 from '../../assets/Edukasi3.png'

const Edukasi = () => {
    return(
        <div className='main-edukasi'>
            <Header/>
            <main className='layout'>
                <div className='edukasi-container'>
                    <h1 className='edukasi-title'>EDUKASI WARISAN BUDAYA</h1>
                    
                    <div className='edukasi-card'>
                        <img src={gambar1} alt="Melestarikan" className='edukasi-image'/>
                        <h3 className='video-title'>10 Cara Melestarikan Budaya Indonesia di Tengah Globalisasi</h3>
                        <button className='edukasi-button'>Selengkapnya</button>
                    </div>

                    <div className='edukasi-card'>
                        <img src={gambar2} alt="Tutur" className='edukasi-image'/>
                        <h3 className='video-title'>TUTUR LISAN DALANG JEMBLUNG UNIK, ETNIK, DAN ANTIK</h3>
                        <button className='edukasi-button'>Selengkapnya</button>
                    </div>

                    <div className='edukasi-card'>
                        <img src={gambar3} alt="Orientasi" className='edukasi-image'/>
                        <h3 className='video-title'>Orientasi Nilai Budaya Banyumas</h3>
                        <button className='edukasi-button'>Selengkapnya</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Edukasi