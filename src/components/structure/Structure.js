import styles from "./structure.module.css";

export default function Structure() {
  return (
    <section className={styles.structureSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Nossa Infraestrutura</h2>
              <p className={styles.sectionSubtitle}>
                Conheça nossas instalações e capacidades industriais
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.structure}>
          <div className={styles.sontwo}>
            <div className={styles.sontwoboxshadow}>
              <div className={`${styles.sontree} ${styles.imag1}`}>
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.sontreemidle}>
                <i className="fas fa-building me-2"></i>
                Área Total
              </div>
              <div className={styles.sontree}>
                <div className={styles.contentList}>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Área Total: 5000 m²</span>
                  </div>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Área Construída: 2000 m²</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.sontwo}>
            <div className={styles.sontwoboxshadow}>
              <div className={`${styles.sontree} ${styles.imag2}`}>
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.sontreemidle}>
                <i className="fas fa-industry me-2"></i>
                Fundição
              </div>
              <div className={styles.sontree}>
                <div className={styles.contentList}>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Trefilação até Ø2"</span>
                  </div>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Moldagem</span>
                  </div>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Fundição (2 ton/dia)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.sontwo}>
            <div className={styles.sontwoboxshadow}>
              <div className={`${styles.sontree} ${styles.imag3}`}>
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.sontreemidle}>
                <i className="fas fa-cogs me-2"></i>
                Usinagem
              </div>
              <div className={styles.sontree}>
                <div className={styles.contentList}>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Tornos CNC</span>
                  </div>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Centros de Usinagem</span>
                  </div>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Tornos Mecânicos</span>
                  </div>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Fresadoras Ferramenteiras</span>
                  </div>
                  <div className={styles.listItem}>
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Entre outros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
