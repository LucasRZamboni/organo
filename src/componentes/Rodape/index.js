import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="faceboo.com" target="_blank">
              <img src="IMG/fb.png" alt="logo facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="IMG/tw.png" alt="logo twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="IMG/ig.png" alt="logo instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="IMG/logo.png" alt="logo organo"/>
      </section>
      <section>
        <p>
            Desenvolvido por LRZ
        </p>
      </section>
    </footer>
  );
};

export default Rodape;
