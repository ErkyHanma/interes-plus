import Footer from "@/components/Footer";
import { karla, montserrat } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const Info = () => {
  return (
    <div
      className={`w-full -mt-24  flex flex-col items-center justify-center  ${montserrat.className}`}
    >
      <Image
        src={"/fs-banner.jpg"}
        alt="Info page Image"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full self-center mb-28 h-auto "
      />
      <div className=" w-full px-12 mb-16 md:w-[80%] lg:w-[55%]">
        <div className="EducacionFinanciera">
          <h2> ¿Qué es la Educación Financiera? </h2>
          <p>
            La educación financiera se refiere al conjunto de conocimientos,
            habilidades y competencias necesarias para entender cómo funciona el
            dinero en la vida cotidiana y cómo tomar decisiones financieras
            inteligentes. Incluye el aprendizaje sobre temas como el presupuesto
            personal, el ahorro, la inversión, el manejo del crédito, los
            impuestos, la planificación para la jubilación y la protección
            contra riesgos financieros.{" "}
          </p>

          <p>
            El objetivo principal de la educación financiera es capacitar a las
            personas para que administren sus recursos de manera eficiente,
            eviten problemas financieros y puedan alcanzar sus metas económicas
            a corto y largo plazo.{" "}
          </p>

          <h3> Importancia de la Educación Financiera </h3>
          <p>
            La educación financiera es fundamental para el bienestar económico
            de individuos y comunidades. Proporciona las herramientas necesarias
            para tomar decisiones financieras informadas, gestionar
            efectivamente el dinero, planificar para el futuro, y reducir el
            estrés financiero.{" "}
          </p>
        </div>

        <div className="interes">
          <h2>¿Qué son los intereses?</h2>
          <p>
            Los intereses son la cantidad de dinero que se paga por el uso del
            dinero prestado, o la cantidad que se recibe por invertir dinero. Es
            una herramienta esencial en el mundo financiero, que puede ser tanto
            una fuente de ingresos como un costo de financiamiento.
          </p>

          <p>
            Cuando una persona o entidad toma un préstamo, el interés es el
            monto adicional que debe pagar al prestamista, calculado como un
            porcentaje del monto prestado, conocido como tasa de interés. Este
            porcentaje puede ser fijo, manteniéndose constante durante el
            período del préstamo, o variable, ajustándose según las condiciones
            del mercado.
          </p>

          <p>
            {" "}
            Los intereses no solo se aplican a préstamos, sino también a
            inversiones; cuando alguien invierte dinero en instrumentos
            financieros como bonos, cuentas de ahorro o certificados de
            depósito, recibe intereses como compensación por permitir que su
            dinero sea utilizado por otros.
          </p>

          <p>
            La acumulación de intereses puede ser simple, calculado únicamente
            sobre el capital inicial, o compuesto, calculado sobre el capital
            inicial más los intereses acumulados previamente, lo cual puede
            resultar en un crecimiento exponencial del valor invertido a lo
            largo del tiempo.{" "}
          </p>

          <p>
            Los intereses juegan un papel crucial en la economía, influyendo en
            el comportamiento de los consumidores y empresas, afectando las
            decisiones de ahorro y gasto, y siendo una herramienta esencial en
            la política monetaria de los gobiernos y bancos centrales para
            controlar la inflación y estimular el crecimiento económico.
          </p>
        </div>

        <div className="imagen_interes">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-[400px] self-center mb-28 h-auto "
            alt=""
            src="/undraw_growth_chart_r99m.svg"
          />
        </div>

        <div className="interes_simple">
          <h5>Interés simple</h5>
          <p>
            El interés simple es un método de cálculo de intereses sobre un
            capital inicial (también conocido como principal) que no se acumula
            con el tiempo. En otras palabras, el interés se calcula únicamente
            sobre el monto inicial invertido o prestado durante un período
            determinado, sin considerar los intereses generados en períodos
            anteriores. El interés simple se calcula sobre el monto inicial de
            un préstamo o inversión, y no se compone.
          </p>

          <p>
            Por ejemplo, si inviertes $1000 a un 5% de interés simple anual,
            ganarás $50 cada año, sin importar cuánto tiempo dure la inversión.
          </p>
        </div>

        <div className="formulasimple">
          <h5> ¿Como se calcula el Interes Simple? </h5>
          <p>
            El interés simple es comúnmente utilizado en préstamos a corto plazo
            y en cuentas de ahorro básicas. Su fórmula es fácil de entender y
            calcular:{" "}
          </p>

          <p>
            {" "}
            <strong>Interés =</strong> Principal x Tasa x Tiempo. Esta fórmula
            refleja que el interés no cambia a lo largo del tiempo manteniéndose
            constante.
          </p>
        </div>

        <div className="imagensimple">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-[500px] py-6 h-auto "
            src="/Screenshot 2024-07-30 223738.png"
            alt="imagen interes simple"
          />
        </div>

        <div className="variablesi">
          <p>
            <strong>El interés (I) </strong>es la cantidad total de dinero que
            se gana o se paga sobre el principal durante un período de tiempo
            determinado. Este valor es el resultado del cálculo del interés
            simple y representa el costo o la ganancia adicional sobre el monto
            principal.
          </p>

          <p>
            <strong>El capital (c) </strong>es el monto inicial de dinero
            invertido o prestado. En la fórmula, es el valor sobre el cual se
            calculará el interés. Este es el dinero que se pone a trabajar en
            una inversión o el monto del préstamo que se utiliza como base para
            calcular los intereses.
          </p>

          <p>
            <strong>La tasa de interés (i) </strong> es el porcentaje que se
            aplica al capital para calcular el interés. En la fórmula, se debe
            usar en formato decimal. Por ejemplo, si la tasa es del 5%, se debe
            convertir a 0.05. Esta tasa indica el costo del dinero por unidad de
            tiempo y se aplica sobre el capital.
          </p>

          <p>
            {" "}
            <strong>Tiempo en Años (t):</strong> Esta es la cantidad de años
            durante los cuales el dinero estará invertido o prestado. Cuanto más
            tiempo pase, más interés se acumulará.
          </p>

          <h2>Ejemplo</h2>
          <p>
            Supongamos que tienes una inversión de $1,000 con una tasa de
            interés simple del 4% anual durante 3 años.
          </p>

          <ul className="flex text-lg mb-6 text-[#555] flex-col gap-4 list-disc pl-6">
            <li>
              <strong>Capital (c)</strong>: $1,000
            </li>
            <li>
              {" "}
              <strong>Tasa de Interés (i)</strong>: 4% o 0.04
            </li>
            <li>
              {" "}
              <strong>Tiempo en Años (t)</strong>: 3 años
            </li>
          </ul>

          <p>
            <strong>Usamos la fórmula para calcular el interés:</strong>
          </p>
          <p>
            <strong>I = c ⋅ i ⋅ t</strong>
          </p>
          <p>
            <strong>Sustituimos los valores:</strong>
          </p>
          <p>I = 1000 ⋅ 0.04 ⋅ 3</p>
          <p>
            <strong></strong>
          </p>
          <p>I = 1000 ⋅ 0.04 ⋅ 3 = 120</p>
          <p>
            En este caso, el interés ganado o pagado después de 3 años sería
            $120.
          </p>
        </div>

        <div className="interescompuesto">
          <h5>Interés compuesto</h5>
          <p>
            {" "}
            El interés compuesto es un método de cálculo de intereses sobre un
            capital inicial (principal) que incluye la acumulación de los
            intereses generados en cada período dentro del cálculo para los
            períodos siguientes. En otras palabras, el interés se calcula no
            solo sobre el principal inicial, sino también sobre los intereses
            acumulados de períodos anteriores.{" "}
          </p>
        </div>

        <div className="forcompuesto">
          <h5>¿Como se calcula el interes Compuesto ?</h5>
          <p>
            El interés compuesto es una herramienta poderosa en inversiones a
            largo plazo, como planes de retiro y fondos de inversión. Se calcula
            sobre el monto inicial y también sobre cualquier interés acumulado
            de períodos anteriores. Esto significa que puedes ganar intereses
            sobre tus intereses, lo cual puede hacer crecer tu inversión de
            manera exponencial.
          </p>
          <p>
            Por ejemplo, una inversión de $1000 a un 5% de interés compuesto
            anual generará $1050 al final del primer año, y los intereses del
            segundo año se calcularán sobre $1050.
          </p>

          <p>La fórmula general para el interés compuesto es:</p>
        </div>

        <div className="imagencompuesta">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-[400px] h-auto "
            src="/Images/formula-interes-compuesto.png"
            alt="imagen interes compuesto"
          />
        </div>

        <div className="variablescompuesta">
          <p>
            {" "}
            <strong>Monto Acumulado (Cf):</strong> Este es el total de dinero
            que tendrás al final del período, incluyendo tanto el principal (el
            dinero que invertiste o prestaste originalmente) como el interés que
            se ha acumulado a lo largo del tiempo. Es el objetivo final de tu
            cálculo.
          </p>

          <p>
            {" "}
            <strong>Capital Inicial (Ci):</strong> Este es el monto inicial de
            dinero que inviertes o prestas. Piensa en él como el punto de
            partida para calcular cuánto crecerá con el tiempo debido al
            interés.
          </p>

          <p>
            {" "}
            <strong>Tasa de Interés Anual (r):</strong> Esta es la tasa a la que
            se calcula el interés sobre tu dinero cada año. Se expresa como un
            porcentaje, pero en la fórmula debe ser en formato decimal. Por
            ejemplo, una tasa de interés del 5% se escribiría como 0.05.
          </p>

          <p>
            <strong>Número de Períodos de Composición por Año (n):</strong> Este
            es el número de veces al año que el interés se calcula y se añade al
            principal. Por ejemplo, si el interés se compone mensualmente, n
            sería 12; si se compone trimestralmente, n sería 4.
          </p>
        </div>

        <div className="diferencias">
          <h5>Diferencias entre el interes Compuesto y Simple</h5>
          <p>
            Básicamente la diferencia está en que en el interés simple, el
            dinero que generan los intereses se calcula solo sobre el capital
            invertido al principio (principal) sin tener en cuenta la posible
            reinversión de los intereses que vaya generando nuestro dinero. Por
            otro lado, en el interés compuesto los intereses obtenidos se
            reinvierten creando con el paso del tiempo un efecto bola de nieve y
            obteniéndose un resultado sensiblemente mayor.
          </p>

          <p>
            Ambos tipos de interés hacen referencia a la cantidad de dinero que
            se genera en un período de tiempo en una inversión. Cada una tiene
            diferencias claves entre el interés simple y compuesto que debes
            tomar en cuenta.
          </p>

          <div className="flex flex-col gap-16">
            <div>
              <h2 className="text-2xl mb-4 font-semibold">Interés simple</h2>
              <ul className="flex text-xl text-[#555] flex-col gap-4 list-disc pl-6">
                <li>
                  Al iniciar un nuevo período de inversión o crédito este
                  interés se mantiene igual.
                </li>
                <li>
                  Se calcula y se paga sobre el capital inicial de la inversión.
                </li>
                <li>
                  Una inversión con interés simple significa que las ganancias
                  generadas no son consideradas para ser reinvertidas en el
                  capital.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4 font-semibold">Interés compuesto</h2>
              <ul className="flex text-xl text-[#555] flex-col gap-4 list-disc pl-6">
                <li>
                  Genera sobre el capital al cumplirse el plazo establecido en
                  la inversión o préstamo.
                </li>
                <li>
                  En caso de una inversión, las ganancias generadas se suman al
                  capital. Esto significa que al ser reinvertido se toma en
                  cuenta el total del capital más los intereses generados.
                </li>
                <li>
                  Con cada nuevo período de inversión se espera que el interés
                  compuesto aumente.
                </li>
              </ul>
            </div>
          </div>

          <div className="mejor">
            <h2>
              ¿Por qué es importante el interés compuesto en tu inversión?{" "}
            </h2>
            <p>
              El interés compuesto puede ser una ventaja para los inversionistas
              a mediano plazo. En el proceso financiero en el que los intereses
              de cada período se suman al capital inicial para producir nuevos
              intereses
            </p>

            <p>
              Aunque ocurre lo contrario para quienes tienen un crédito. Aquí se
              va generando interés sobre interés, y por lo tanto la deuda se
              hace interminable. La{" "}
              <Link
                className="text-[#0000EE] hover:underline"
                href={"https://www.condusef.gob.mx"}
              >
                CONDUSEF
              </Link>{" "}
              recomienda tener un plan para evitar que los intereses de un
              préstamo se conviertan en un problema.{" "}
            </p>

            <p>
              En el caso de las inversiones las ganancias generadas son sumadas
              al capital, y si comienza un nuevo período, el interés se
              calculará sobre la base de este nuevo capital. ¿Esto qué quiere
              decir? Pues que el interés irá en función del capital anterior más
              los intereses generados.
            </p>

            <p>
              El interés compuesto así como puede ser benéfico para los
              inversionistas a mediano plazo, ocurre lo contrario para quienes
              tienen un crédito. Este ejemplo lo vemos más recurrentemente en
              las tarjetas de crédito cuando se paga el mínimo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
