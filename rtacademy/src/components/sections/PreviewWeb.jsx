import '../../styles/preview.css';
import preview from '../../assets/images/preview.png';
import bookicon from '../../assets/images/book-icon.webp'
import telkom from '../../assets/images/telkomschool.png'


const PreviewWeb = () => {
    return (
      <div className="preview-container">
        <header className="preview-header">
          <h1 className="preview-heading">
          Pembelajaran web development <br/> interaktif untuk siswa SMA/SMK di Indonesia
          </h1>
          <div className="preview-button-group">
            <button className="preview-btn-primary">Mulai Sekarang</button>
            <button className="preview-btn-secondary">Coba Gratis</button>
          </div>
        </header>
        <main className="preview-main">
          <div className="preview-dashboard-image">
            <img src={preview} alt="Dashboard screenshot" className="preview-image" />
          </div>
          <div className="preview-grid">
            <div className="preview-card">
            <h6 className='preview-h6'>Studi Kasus</h6>
            <img src={telkom} alt="RT ACADEMY Logo" className="bookicon2"  />
              <p className='preview-alasan'>Pelajari bagaimana sebuah startup teknologi meningkatkan keterampilan tim mereka dan mempersiapkan diri untuk proyek pengembangan web terkini.</p>
            </div>
            <div className="preview-card">
              <h6 className='preview-h6'>Why RT ACADEMY?</h6>
              <img src={bookicon} alt='bookicon' className='bookicon'></img>
                <p className='preview-alasan'>Pengembang web Indonesia perlu terus mengikuti tren teknologi, meningkatkan keahlian, dan bersaing di pasar global.</p>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default PreviewWeb;


