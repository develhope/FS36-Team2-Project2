import { CollapsedButton } from "./headercomponents/CollapsedButton"

function Footer(){
return (
    <footer className="nintendo-footer">
      <div className="top-line">
          <CollapsedButton />
      </div>
        <div className="footer-links">
          <ul>
            <li><a href="">Genitori e filtro famiglia</a></li>
            <li><a href="">Assistenza</a></li>
            <li><a href="">Informazioni aziendali</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Policy sulla privacy del sito</a></li>
            <li><a href="">Supporto</a></li>
          </ul>
        </div>
        <div className="footer-links2">
          <ul>
            <li><a href="">Impostazioni idei cookie</a></li>
            <li><a href="">Informazioni legali</a></li>
            <li><a href="">Interruzione di un servizio</a></li>
            <li><a href="">Responsabilità sociale d'impresa</a></li>
            <li><a href="">Contatti</a></li>
          </ul>
        </div>
        <div className="footer-copyright">
          <ul>
            <li>© Nintendo. 2025</li>
          </ul>
        </div>
      </footer>)
}

export default Footer
