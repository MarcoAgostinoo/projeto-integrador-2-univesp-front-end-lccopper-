import { useEffect, useRef } from 'react';
import styles from './bannertop.module.css'; 
import Script from 'next/script'; 
import Link from 'next/link';

export default function Bannertop() { 
  const carouselRef = useRef(null);

  useEffect(() => {
    // Importando o Bootstrap apenas se necessário
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

    const carousel = new bootstrap.Carousel(carouselRef.current, {
      interval: 6000, // Trocar a cada 6 segundos
      pause: false, // Para não pausar ao passar o mouse
    });

    return () => {
      carousel.dispose(); // Limpa a instância do carrossel ao desmontar
    };
  }, []);

  return ( 
    <div className={styles.HeaderNav}>
      <div 
        id="carouselExampleCaptions" 
        className={`carousel slide my-carousel`} 
        data-bs-ride="carousel" // Certifique-se de que este atributo está presente
        ref={carouselRef} 
      > 
        <div className="carousel-inner"> 
          {['home01.webp', 'trabalhe01.webp', 'usinagem01.png'].map((imgSrc, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={imgSrc}>
              <img src={imgSrc} className="d-block w-100" alt="Descrição da imagem" loading="lazy" />
              <div className={styles.textcarousel}>
                <h5 className={styles.textcarouselson}>
                  {index === 0 && "Qualidade e Inovação em Soluções de Soldagem para a Indústria"}
                  {index === 1 && "Experiência de Quase 25 Anos em Reposição de Solda e Usinagem"}
                  {index === 2 && "Compromisso Inabalável com a Excelência em Nossos Produtos"}
                </h5>
                <p className={styles.textcarouselson2}>
                  {index === 0 && "Transforme sua produção com nossas soluções de solda de alta performance. Junte-se aos líderes do setor!"}
                  {index === 1 && "Somos o parceiro ideal para sua indústria automotiva. Solicite um orçamento e descubra!"}
                  {index === 2 && "Estamos prontos para atender suas necessidades. Entre em contato!"}
                </p>
                <div className={styles.buttonsbanner}>
                  <ul className={styles.listbutton}>
                    {index === 0 && (
                      <>
                        <li> 
                          <Link href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-success">Solicite um Orçamento</button>
                          </Link>
                        </li>
                        <li> 
                          <Link href="tel:551146760398" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-phone" style={{ marginLeft: "10px", marginRight: "4px" }}></i>
                            <button type="button" className="btn btn-outline-primary">(11) 4676-0398</button>
                          </Link>
                        </li>
                      </>
                    )}
                    {index === 1 && (
                      <li> 
                        <Link href="/produtos" rel="noopener noreferrer">
                          <button type="button" className="btn btn-lg btn-primary">Conheça Nossas Soluções</button>
                        </Link>
                      </li>
                    )}
                    {index === 2 && (
                      <li>
                        <Link className={`btn btn-lg mb-5 ${styles.ctaButton}`} href="/contato" rel="noopener noreferrer">
                            Entre em Contato                    
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
        crossOrigin="anonymous" 
        strategy="afterInteractive" 
      />
    </div> 
  ); 
}
