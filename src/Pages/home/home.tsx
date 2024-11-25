import { Navbar } from "../../components/layout/navbar";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import { Footer } from "../../components/layout/footer";

export function Home() {
	return (
		<div className="flex flex-col min-h-screen">
		  <Navbar />
		  <main className="flex-grow p-4 pt-28 flex items-start justify-center">
			<div className="max-w-4xl mx-auto">
			  <h1 className="text-3xl font-bold mb-6 text-center">Sistema de Monitoramento de Queimadas Urbanas</h1>
			  <div className="space-y-4 text-justify">
				<p>
				  Este trabalho propõe um sistema tecnológico que utiliza sensores de dióxido de carbono (CO2) e temperatura, conectados a um microcontrolador ESP32, para monitorar queimadas urbanas em tempo real. Os sensores coletam dados, e ao identificar níveis críticos, o sistema envia alertas às autoridades locais, permitindo uma resposta rápida.
				</p>
				<h2 className="text-2xl font-semibold mt-6 mb-3">Principais componentes do sistema:</h2>
				<ul className="list-disc pl-6 space-y-2">
				  <li>Sensor de CO2: Monitora a concentração de dióxido de carbono como indicador de queimadas.</li>
				  <li>Sensor de Temperatura (DHT11): Detecta variações bruscas relacionadas a focos de incêndio.</li>
				  <li>ESP32: Processa os dados coletados e envia alertas em tempo real.</li>
				  <li>Placa de Fenolite: Suporte para montagem dos componentes eletrônicos.</li>
				  <li>LEDs e Resistores: Indicam o status do sistema e alertam para falhas.</li>
				</ul>
				<p>
				  O sistema é complementado por uma plataforma web interativa, construída com React e Tailwind CSS, que apresenta mapas atualizados com os focos de incêndio e estatísticas. As informações coletadas são armazenadas em um banco de dados PostgreSQL e gerenciadas por tecnologias como Express e Prisma ORM. O site é acessível ao público e contribui para conscientizar a população sobre os riscos das queimadas.
				</p>
				<h2 className="text-2xl font-semibold mt-6 mb-3">Resultados:</h2>
				<p>
				  Testes iniciais indicaram que a combinação de sensores e o ESP32 é eficaz na detecção de queimadas em tempo real. O sistema reduz significativamente o tempo de resposta dos bombeiros, minimizando os danos causados pelas queimadas. Além disso, a interface amigável promove a conscientização e incentiva a adoção de medidas preventivas, tornando o projeto replicável para outras cidades que enfrentam desafios semelhantes.
				</p>
			  </div>
			</div>
		  </main>
		  <Footer />
		</div>
	  );
}
