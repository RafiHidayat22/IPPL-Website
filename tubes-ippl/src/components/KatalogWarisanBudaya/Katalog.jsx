import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Katalog.css'
import gambar1 from '../../assets/Katalog1.jpg'
import gambar2 from '../../assets/Katalog2.jpg'
import gambar3 from '../../assets/Katalog3.jpg'
import gambar4 from '../../assets/Katalog4.jpg'
import gambar5 from '../../assets/Katalog5.png'
import gambar6 from '../../assets/Katalog6.jpg'
import gambar7 from '../../assets/Katalog7.jpg'
import gambar8 from '../../assets/Katalog8.png'
import gambar9 from '../../assets/Katalog9.jpg'
import gambar10 from '../../assets/Katalog10.jpg'

const Katalog = () => {
    const KatalogLink1 = () => {
        window.open("https://media.neliti.com/media/publications/11746-ID-babad-pasir-banyumas-dan-sunda.pdf", "_blank");
    };

    const KatalogLink2 = () => {
        window.open("https://repositori.kemdikbud.go.id/28031/2/RADEN%20KAMANDAKA%20CERITERA%20RAKYAT%20DARI%20DAERAH%20BANYUMAS%20JATENG.pdf", "_blank");
    };

    const KatalogLink3 = () => {
        window.open("http://samudra.desa.id/read/48415/cerita-rakyat-asal-usul-desa-samudra", "_blank");
    };

    const KatalogLink4 = () => {
        window.open("https://dinporabudpar.banyumaskab.go.id/read/19010/dalang-jemblung", "_blank");
    };

    const KatalogLink5 = () => {
        window.open("https://budaya-indonesia.org/wayang-banyumasan-sejarah-proses-dan-pelestarian-budaya-di-cilacap", "_blank");
    };

    const KatalogLink6 = () => {
        window.open("https://jejakpersepsi.com/budaya/tari-gambyong-banyumasan-kekayaan-budaya-yang-perlu-dilestarikan/", "_blank");
    };

    const KatalogLink7 = () => {
        window.open("https://www.goodnewsfromindonesia.id/2022/12/07/tari-lenggasor-tari-kreasi-baru-asal-purbalingga-yang-berbasis-dari-tari-lengger", "_blank");
    };

    const KatalogLink8 = () => {
        window.open("https://www.djkn.kemenkeu.go.id/kpknl-purwokerto/baca-artikel/14341/Begalan-Tradisi-Pernikahan-RakyatBanyumas.html", "_blank");
    };

    const KatalogLink9 = () => {
        window.open("https://rawalokec.banyumaskab.go.id/news/32107/grebeg-suran-ruwat-bumi", "_blank");
    };

    const KatalogLink10 = () => {
        window.open("https://id.wikipedia.org/wiki/Bahasa_Jawa_Banyumasan", "_blank");
    };

    return(
        <div className='main-katalog'>
            <Header/>
            <main className='layout'>
                <div className='katalog-container'>
                    <h1 className='katalog-title'>KATALOG WARISAN BUDAYA</h1>
                    
                    <div className='katalog-card'>
                        <img src={gambar1} alt="Legenda Baturaden" className='katalog-image'/>
                        <h3 className='video-title'>Badad Pasir</h3>
                        <button className='katalog-button' onClick={KatalogLink1}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar2} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Raden Kamandaka</h3>
                        <button className='katalog-button' onClick={KatalogLink2}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar3} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Desa Samudra Kecamatan Gumelar</h3>
                        <button className='katalog-button' onClick={KatalogLink3}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar4} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Dalang Jemblung</h3>
                        <button className='katalog-button' onClick={KatalogLink4}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar5} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Wayang Banyumasan</h3>
                        <button className='katalog-button' onClick={KatalogLink5}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar6} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Tari Gambyong</h3>
                        <button className='katalog-button' onClick={KatalogLink6}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar7} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Tari Lenggasor</h3>
                        <button className='katalog-button' onClick={KatalogLink7}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar8} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Begalan</h3>
                        <button className='katalog-button' onClick={KatalogLink8}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar9} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Sedekah Bumi</h3>
                        <button className='katalog-button' onClick={KatalogLink9}>Selengkapnya</button>
                    </div>

                    <div className='katalog-card'>
                        <img src={gambar10} alt="Begalan" className='katalog-image'/>
                        <h3 className='video-title'>Bahasa ngapak</h3>
                        <button className='katalog-button' onClick={KatalogLink10}>Selengkapnya</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Katalog