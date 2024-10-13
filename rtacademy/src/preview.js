import './preview.css';
import preview from './preview.png';
import bookicon from './book-icon.webp'


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
              <h2>Case study</h2>
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum placeat.</p>
            </div>
            <div className="preview-card">
              <h6 className='preview-h6'>Why RT ACADEMY?</h6>
              <img src={bookicon} alt='bookicon' className='bookicon'></img>
                <p className='preview-alasan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum placeat.</p>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default PreviewWeb;


