import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './Challenge.css'
import gambar1 from '../../../assets/Challenge1.jpeg'
import gambar2 from '../../../assets/Challenge2.jpg'
import gambar3 from '../../../assets/Challenge3.jpg'

const Challenge = () => {
    return(
        <div className='main-challenge'>
            <Header/>
            <main className='layout'>
                <div className='challenge-container'>
                    <h1 className='challenge-title'>Challenge</h1>
                    
                    <div className='challenge-card'>
                        <img src={gambar1} alt="Legenda Baturaden" className='challenge-image'/>
                        <h3 className='video-title'>Lomba Desain Logo</h3>
                        <button className='challenge-button'>Selengkapnya</button>
                    </div>

                    <div className='challenge-card'>
                        <img src={gambar2} alt="Begalan" className='challenge-image'/>
                        <h3 className='video-title'>Kompetisi Poster Digital</h3>
                        <button className='challenge-button'>Selengkapnya</button>
                    </div>

                    <div className='challenge-card'>
                        <img src={gambar3} alt="Begalan" className='challenge-image'/>
                        <h3 className='video-title'>Lomba Poster Budaya</h3>
                        <button className='challenge-button'>Selengkapnya</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Challenge