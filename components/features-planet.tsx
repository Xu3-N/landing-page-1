import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/avatar-01.jpg";
import PlanetTagImg02 from "@/public/images/avatar-02.jpg";
import PlanetTagImg03 from "@/public/images/avatar-03.jpg";
import PlanetTagImg04 from "@/public/images/avatar-04.jpg";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              BME proporciona tecnología, infraestructuras y servicios para la
              inversión y financiación empresarial.
            </h2>
            <div className="text-gray-50 mt-4">
              Bienvenido a Bolsas y Mercados Españoles (BME), una empresa del
              grupo SIX, responsable de la gestión de las bolsas de valores, los
              mercados de valores y el sistema financiero en España. BME actúa
              como puente entre emisores e inversores, proporcionando canales de
              financiación para la economía y posicionándose como un referente
              global para las empresas españolas.
            </div>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="rounded-full absolute -left-10 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={80}
                      height={80}
                      alt="Tag 01"
                    />
                    <Image
                      className="rounded-full absolute left-80 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={80}
                      height={80}
                      alt="Tag 02"
                    />
                    <Image
                      className="rounded-full absolute -left-2 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-55 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={80}
                      height={80}
                      alt="Tag 03"
                    />
                    <Image
                      className="rounded-full absolute bottom-32 left-70 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-40 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={80}
                      height={80}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>BME Exchange</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                En la Bolsa de Valores de España, nos comprometemos a
                proporcionar a nuestros miembros todo lo necesario para alcanzar
                el éxito en sus negocios. Trabajamos mano a mano con ellos para
                innovar y crear soluciones a medida que aseguren una liquidez
                excelente, spreads bajos y una calidad de mercado insuperable.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>IBEX 35</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Nuestro índice IBEX 35 incluye las 35 mayores empresas del
                mercado español, pero la lista va mucho más allá. El mercado de
                acciones de BME Exchange abarca compañías de diversos sectores y
                tamaños, reflejando la vitalidad y el desarrollo de la economía
                española en su conjunto. Para los inversores interesados en
                analizar la evolución del índice, el historial del IBEX 35
                ofrece una visión detallada de su comportamiento a lo largo del
                tiempo.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>Rentabilidad</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                De hecho, ya cuento con suficiente experiencia obteniendo
                ganancias tanto en operaciones a corto como a largo plazo. Ya
                seas un principiante o un inversor con más de 10 años en el
                mercado, lideraré a mi equipo de trading para reconstruir una
                institución que logre más del 300% de rentabilidad en un mes.
                Después de recomendar CRCL (Circle Internet Group), ahora es tu
                momento: haz clic en el botón de abajo y únete a mi plan para
                recibir la segunda acción con potencial a corto plazo.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
