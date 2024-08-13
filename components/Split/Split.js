import Image from "next/image";
import Link from "next/link";

import splitImg from "../../public/images/split/split-8.png";

const Split = () => {
  return (
    <>
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="container">
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      src={splitImg}
                      alt="split Images"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                      Gestisci la scuola con la prima AI creata per la scuola
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                      Unlock Conversion-Driven Content: Business Bios, Facebook
                      Ads, Product Descriptions, Emails, Landing Pages, Social
                      Ads, and Beyond.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="350"
                    >
                      <li>- Gestisco dedicata alla gestione delle esigenze scolastiche quotidiane.</li>
                      <li>- Progetto la sezione dedicata alla progettazione dei bandi scolastici</li>
                      <li>- Rendiconto la prima AI pensata per li mondo deall rendicontazione delle gare.</li>
                      <li>- Global per avere tutto.</li>

                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default" href="/contact">
                        Contattaci
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Split;
