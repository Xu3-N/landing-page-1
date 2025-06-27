import Image from "next/image";
import Person1 from "@/public/images/avatar-01.jpg";
import Person2 from "@/public/images/avatar-02.jpg";
import Person3 from "@/public/images/avatar-03.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={Person3}
                width={80}
                height={80}
                alt="Large testimonial"
              />
            </div>
            <p className="font-bold text-gray-900">
              Sergio Fernández-Pacheco es licenciado en Derecho y Ciencias
              Empresariales por la Universidad Pontificia de Comillas (ICADE
              E-3).
            </p>
            <p className="font-bold text-gray-900">
              Comenzó su carrera profesional en 1994, en el área de Servicios
              Financieros de Accenture, desarrollando proyectos de tecnología y
              reingeniería de procesos para diferentes entidades bancarias.
            </p>
            <p className="font-bold text-gray-900">
              En 1997 entró en BBVA, donde ocupó diferentes puestos de
              responsabilidad en unidades como Expansión Corporativa, Banca
              Privada, Banca de Inversiones y, en su última etapa, como managing
              director de Asset Management, coordinando planes estratégicos,
              iniciativas digitales, y propuestas de producto propio y de
              terceras gestoras.
            </p>
            <p className="font-bold text-gray-900">
              Durante su carrera profesional en el Grupo BBVA fue presidente de
              Europea de Titulización, miembro del Consejo de Garanti Asset
              Management (Turquía) y miembro del Consejo de BBVA Suiza.
            </p>
            <p className="font-bold text-gray-900">
              En noviembre de 2015 fundó Azvalor, donde es Director Financiero y
              de Operaciones desde entonces.
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Sergio Fernández-Pacheco</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                profesor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
