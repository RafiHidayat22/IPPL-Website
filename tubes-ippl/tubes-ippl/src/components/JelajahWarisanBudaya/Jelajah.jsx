import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Jelajah.css';
import gambar1 from '../../assets/Jelajah1.png';
import gambar2 from '../../assets/mapjelajah.png';
import VideoPlayer from './vidPlayer';

const Jelajah = () => {
    return (
        <div className='main-jelajah'>
            <Header/>
            <main className='layout'>

                {/* Section 1 */}
                <div className='section1'>
                    <span className='section1-left'>
                        <h1>Jelajah Warisan Budaya</h1>
                        <h3>Temukan Lokasi Bersejarah, ikuti virtual tur, dan kenali budaya lokal lebih dekat</h3>
                    </span>
                    <span className='section1-right'>
                        <img src={gambar1} alt="gambar1" className='img1-jelajah' />
                    </span>
                </div>

                {/* Section 2 */}
                <div className='section2'>
                    <h1>Tur Video Budaya</h1>
                    <img src={gambar2} alt="map" className='img2-jelajah' />
                </div>

                {/* Section 3: Benteng Pendem Cilacap */}
                <div className='section3'>
                    <span className='section3-top'>
                        <h1>Menelusuri Benteng Pendem Cilacap</h1>
                        <h3>Benteng Pendem Cilacap adalah benteng peninggalan Belanda yang dibangun pada abad ke-19 untuk pertahanan militer di pesisir selatan Jawa.</h3>
                        <h3>Kini, benteng ini menjadi destinasi wisata sejarah yang menampilkan reruntuhan bangunan, terowongan, dan meriam kuno.</h3>
                    </span>
                    <span className='section3-btm'>
                        <VideoPlayer url="https://youtu.be/HtncWDOCv2w?si=HE7Jg8vZWBoIkYrg" />
                        <a href="https://maps.app.goo.gl/s9SaiKSqBtSvd3bE9" target="_blank" rel="noopener noreferrer" className="maps-button">
                            Lihat Lokasi di Maps
                        </a>
                    </span>
                </div>

                {/* Section 4: Benteng Van Der Wijck */}
                <div className='section4'>
                    <span className='section4-top'>
                        <h1>Menelusuri Benteng Van Der Wijck</h1>
                        <h3>Benteng Van Der Wijck adalah benteng kolonial Belanda abad ke-19 di Gombong, Kebumen.</h3>
                        <h3>Memiliki bentuk segi delapan dan dinding merah bata, benteng ini kini menjadi destinasi wisata edukasi, sejarah, dan spot foto menarik.</h3>
                    </span>
                    <span className='section4-btm'>
                        <VideoPlayer url="https://youtu.be/MwtpXXIBrpU?si=60lCOUkKu1wbJq4Z" />
                        <a href="https://maps.app.goo.gl/3BvraLoDEJTWXEwR8" target="_blank" rel="noopener noreferrer" className="maps-button">
                            Lihat Lokasi di Maps
                        </a>
                    </span>
                </div>

                {/* Section 5: Museum Wayang Banyumas */}
                <div className='section5'>
                    <span className='section5-top'>
                        <h1>Museum Wayang Banyumas</h1>
                        <h3>Museum Wayang Banyumas menampilkan koleksi wayang dari berbagai daerah di Indonesia, termasuk wayang kulit, wayang golek, dan wayang beber.</h3>
                        <h3>Museum ini menjadi pusat pelestarian budaya tradisional serta menawarkan pengalaman edukatif tentang sejarah dan perkembangan seni wayang di Banyumas.</h3>
                    </span>
                    <span className='section5-btm'>
                        <VideoPlayer url="https://youtube.com/shorts/Ywi4nvZNTlU?si=2Kv-ozcmcHwGwcW-" />
                        <a href="https://maps.app.goo.gl/swpkYa7G6ectgoku5" target="_blank" rel="noopener noreferrer" className="maps-button">
                            Lihat Lokasi di Maps
                        </a>
                    </span>
                </div>

                {/* Section 6: Museum Jenderal Soedirman */}
                <div className='section6'>
                    <span className='section6-top'>
                        <h1>Museum Panglima Besar Jenderal Soedirman</h1>
                        <h3>Museum ini didedikasikan untuk mengenang jasa Panglima Besar Jenderal Soedirman, pahlawan nasional asal Banyumas.</h3>
                        <h3>Di dalamnya, pengunjung dapat melihat benda-benda bersejarah, replika rumah masa kecil Soedirman, hingga dokumentasi perjuangannya dalam mempertahankan kemerdekaan Indonesia.</h3>
                    </span>
                    <span className='section6-btm'>
                        <VideoPlayer url="https://youtu.be/gdeHQl4joNU?si=B2BCKQ4U9gnqaIme" />
                        <a href="https://maps.app.goo.gl/LpCFJ1VNNhrzQPYz7" target="_blank" rel="noopener noreferrer" className="maps-button">
                            Lihat Lokasi di Maps
                        </a>
                    </span>
                </div>

                {/* Section 7: Kota Lama Banyumas */}
                <div className='section7'>
                    <span className='section7-top'>
                        <h1>Kota Lama Banyumas</h1>
                        <h3>Kota Lama Banyumas merupakan kawasan bersejarah yang mempertahankan bangunan-bangunan kolonial dari masa Hindia Belanda.</h3>
                        <h3>Berjalan-jalan di sini membawa pengunjung bernostalgia dengan suasana tempo dulu yang kental, sekaligus mengenal lebih dekat perkembangan awal wilayah Banyumas.</h3>
                    </span>
                    <span className='section7-btm'>
                        <VideoPlayer url="https://youtu.be/8OHB-myKqT4?si=vlrh5vz2Y2DAGHa3" />
                        <a href="https://maps.app.goo.gl/8pkWsAnC4Qks8Byj6" target="_blank" rel="noopener noreferrer" className="maps-button">
                            Lihat Lokasi di Maps
                        </a>
                    </span>
                </div>

                {/* Section 8: Museum BRI Purwokerto */}
                <div className='section8'>
                    <span className='section8-top'>
                        <h1>Museum BRI Purwokerto</h1>
                        <h3>Museum BRI Purwokerto menceritakan sejarah berdirinya Bank Rakyat Indonesia, salah satu bank tertua di Indonesia.</h3>
                        <h3>Museum ini memamerkan koleksi dokumen, alat transaksi kuno, dan informasi perjalanan BRI dari masa kolonial hingga era modern.</h3>
                    </span>
                    <span className='section8-btm'>
                        <VideoPlayer url="https://youtu.be/gloTzSSYjMI?si=c1fTMzqopbPkVfZm" />
                        <a href="https://maps.app.goo.gl/oD3dogVG2KKgjoKM9" target="_blank" rel="noopener noreferrer" className="maps-button">
                            Lihat Lokasi di Maps
                        </a>
                    </span>
                </div>

            </main>
            <Footer/>
        </div>
    );
}

export default Jelajah;
