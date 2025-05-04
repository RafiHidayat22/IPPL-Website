import { Link } from 'react-router-dom';
import Responsive from '../../assets/responsive'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './HomePage.css'
import gambar1 from '../../assets/Home1.png'
import gambar2 from '../../assets/Home2.png'
import gambar3 from '../../assets/Home3.png'
import gambar4 from '../../assets/Home4.png'
import gambar5 from '../../assets/Home5.png'
import gambar6 from '../../assets/Home6.png'


const HomePage = () => {
    return (
        <div className="homePage">
            

           <div className="main">
                <Responsive />
                <Header/>
                    <main className="content1">
                        <span className='content1-left'> 
                            <img src={gambar1} alt="gambar wayang" className='img1' />
                        </span>
                        <span className='content1-right'>
                            <h2>Mari Mengenal Kebudayaan Barlingmascakeb</h2>
                            <p>
                                Barlingmascakeb adalah singkatan dari Banjarnegara, Purbalingga, Banyumas, Cilacap, dan Kebumen. Wilayah ini merupakan salah satu wilayah metropolitan di Provinsi Jawa Tengah.
                            </p>
                            <p>
                            Barlingmascakeb juga merupakan nama manajemen kerja sama antara lima kabupaten di wilayah eks Karesidenan Banyumasan. Tujuannya adalah untuk meningkatkan efisiensi dan efektivitas kerja sama
                            </p>
                        </span>
                    </main>
                    <main className="content2">
                        <span className='content2-left'>
                            <h2>Katalog Warisan Budaya</h2>
                            <p>
                                 Kumpulan data warisan budaya tak benda di Barlingmascakeb, seperti:
                            </p>
                            <ul>
                            <li>Cerita rakyat</li>
                            <li>Tradisi lisan</li>
                            <li>Seni pertunjukan tradisional</li>
                            <li>Adat istiadat</li>
                            <li>Bahasa daerah</li>
                            </ul>
                            <Link to="/katalog">
                                <button className="content2-btn">Pelajari Selengkapnya</button>
                            </Link>                          
                        </span>
                        <span className='content2-right'> 
                            <img src={gambar2} alt="gambar wayang" className='img2' />
                            
                        </span>
                    </main>

                    <main className="content3">
                        <span className='content3-left'> 
                            <img src={gambar3} alt="gambar wayang" className='img3' />
                            
                        </span>
                        <span className='content3-right'>
                            <h2>Edukasi Warisan Budaya Dan Galeri Warisan Budaya</h2>
                            <p>
                                Sejarah warisan budaya : 
                            </p>
                            <ul>
                            <li>Makna dan pentingnya warisan budaya</li>
                            <li>Cara melestarikan warisan budaya</li>
                            <li>Foto-foto tradisi lisan</li>
                            <li>Video seni pertunjukan</li>
                            <li>Dokumen sejarah warisan budaya</li>
                            </ul>
                            <Link to="/edukasi">
                                <button className="content3-btn">Pelajari Selengkapnya</button>
                            </Link>    
                        </span>
                    </main>

                    <main className="content4">
                        <span className='content4-left'>
                            <h2>Interaktif Budaya</h2>
                            <p>
                            Fitur yang memungkinkan pengguna berpartisipasi aktif dalam pelestarian budaya, melalui:
                            </p>
                            <ul>
                            <li>Kuis dan permainan interaktif tentang warisan budaya  </li>
                            <li>Tantangan budaya, seperti membuat video singkat tentang tradisi daerah</li>
                            </ul>
                            <Link to="/quizchallenge">
                                <button className="content4-btn">Pelajari Selengkapnya</button>
                            </Link>                          
                        </span>
                        <span className='content4-right'> 
                            <img src={gambar4} alt="gambar wayang" className='img4' />
                            
                        </span>
                    </main>

                    <main className="content5">
                        <span className='content5-left'> 
                            <img src={gambar5} alt="gambar wayang" className='img5' />
                            
                        </span>
                        <span className='content5-right'>
                            <h2>Jelajah Warisan Budaya</h2>
                            <p>
                            Fitur yang memungkinkan pengguna menjelajahi lokasi warisan budaya secara langsung atau virtual, dengan: 
                            </p>
                            <ul>
                            <li>Peta interaktif yang menunjukkan lokasi penting terkait warisan budaya di Barlingmascakeb  </li>
                            <li>Tur video dokumentasi tempat-tempat bersejarah</li>
                            <li>Rekomendasi perjalanan budaya bagi wisatawan yang ingin mengenal lebih dalam budaya setempat</li>
                            </ul>
                            <Link to="/jelajah">
                                <button className="content5-btn">Pelajari Selengkapnya</button>
                            </Link>
                        </span>
                    </main>

                    <main className="content6">
                        <span className='content6-left'> 
                            <img src={gambar6} alt="gambar wayang" className='img6' />
                            
                        </span>
                        <span className='content6-right'>
                            <h2>Komunitas Warisan Budaya</h2>
                            <p>
                            Gabung Komunitas Budaya Kami Untuk Membantu Melestarikan Kebudayaan Barlingmascakep
                            </p>
                            <Link to="/forum">
                                <button className="content6-btn">Pelajari Selengkapnya</button>
                            </Link>
                        </span>
                    </main>
                <Footer/>   
            </div> 
        </div>
    )
}

export default HomePage