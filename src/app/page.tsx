import Card from "./components/Card";

import Capa1 from "./assets/casas_alugar/01/capa.png";
import Mapa1 from "./assets/casas_alugar/01/mapa.png";
import Capa2 from "./assets/casas_alugar/02/capa.png";
import Mapa2 from "./assets/casas_alugar/02/mapa.png";
import Capa3 from "./assets/casas_alugar/03/capa.png";
import Mapa3 from "./assets/casas_alugar/03/mapa.png";
import Capa4 from "./assets/casas_alugar/04/capa.png";
import Mapa4 from "./assets/casas_alugar/04/mapa.png";
import Capa5 from "./assets/casas_alugar/05/capa.png";
import Mapa5 from "./assets/casas_alugar/05/mapa.png";

const Casas = [
  {
    link: 'https://www.vivareal.com.br/imovel/apartamento-2-quartos-brasilia-bairros-feira-de-santana-70m2-aluguel-RS730-id-2589106532/',
    endereco: 'Rua Coronel Murta, 100 - Brasília, Feira de Santana - BA',
    valor: 'R$ 730,00',
    descricao: "Apartamento com 2 Quartos e 1 banheiro para Alugar, 70 m² por R$ 730/Mês Apartamento Armários na Cozinha amplo no Bairro Brasília Terceiro andar O apartamento é amplo terceiro andar total nascente. Rua tranquila próximo as principais avenida da cidade. Com supermercados, padarias, delicatessens, escolas e todo centro comercial. Valor Incluso agua.",
    capa: Capa1,
    mapa: 'https://goo.gl/maps/e8Uo2HvFJg5fguin6'
  },
  {
    link: 'https://ba.olx.com.br/regiao-de-feira-de-santana-e-alagoinhas/imoveis/kitinete-semi-mobiliado-1169856792?lis=listing_1002',
    endereco: 'Avenida José Falcão da Silva, Queimadinha - Feira de Santana, BA, CEP: 44050512',
    valor: 'R$ 600,00',
    descricao: "Kitinet na Av José Falcão, próximo do centro, 600 reais mensais e temporada a combinar, para uma pessoa, com agua, luz e internet básica, (geladeira, fogão, cama, mesa ) e muito bem localizado, perto de mercado, ponto de ónibus e em frente a uma das melhores área de lazer natura de Feira (Parque da Lagoa) ambiente estritamente familiar, vaga de garagem só para moto. 71 9 9161 6165 whats app",
    capa: Capa2,
    mapa: 'https://goo.gl/maps/YyPeY3GgrwfPpo3w8'
  },
  {
    link: 'https://ba.olx.com.br/regiao-de-feira-de-santana-e-alagoinhas/imoveis/casas-na-barroquinha-1163809557?lis=listing_1002',
    endereco: 'Rua Guanabara, Centro - Feira de Santana, BA, CEP: 44002472',
    valor: 'R$ 750,00',
    descricao: "Casa na Barroquinha em Cond fechado com portão eletrônico, interfone e garagem. Rua Guanabara 45",
    capa: Capa3,
    mapa: 'https://goo.gl/maps/rRtdukzqvmrd3UTe6'
  },
  {
    link: 'https://ba.olx.com.br/regiao-de-feira-de-santana-e-alagoinhas/imoveis/alugo-kitnet-semi-mobiliado-em-condominio-down-town-proximo-ao-forum-1161851025?lis=listing_1002',
    endereco: 'Rua Intendente Abdon - até 1190/1191 Queimadinha - Feira de Santana, BA, CEP: 44050024',
    valor: 'R$ 650,00',
    descricao: "Alugo Kitnet de 1/4 em condomínio Down Town Flat, próximo ao Centro, Avenida José Falcão e Avenida José Falcão, Possui, um quarto com cama de solteiro, geladeira, fogão, sofá, vaga para moto. Valor: 650, 00 Incluso taxa de água e taxa de condomínio, Entre em contato para Maiores Informações, (75) 9 8144 - 5420, Geisa Silva, CRECI 24.992",
    capa: Capa4,
    mapa: 'https://goo.gl/maps/sYVM8Au2XpdDH6e5A'
  },
  {
    link: 'https://ba.olx.com.br/regiao-de-feira-de-santana-e-alagoinhas/imoveis/alugo-apartamentos-proximo-a-avenida-joao-durval-1151946230?lis=listing_1002',
    endereco: 'Rua União Ponto Central - Feira de Santana, BA, CEP: 44045100',
    valor: 'R$ 550.00',
    descricao: "Alugo apartamentos 1º andar, 2/4, sala, cozinha, banheiro social, área de serviço e varanda, sem garagem. Situado á rua travessa união, fundo do Tend Tudo, ótima localização, próximo ao centro da cidade, avenida getúlio vargas e pontos comerciais. ligue e agende uma visita ( 75 ) 98126-2429",
    capa: Capa5,
    mapa: 'https://goo.gl/maps/qyMxehuHWpF5KW8P6'
  }
]

export default function Home() {
  return (
    <div className="p-5 grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {Casas.map((casa, i) => (
        <Card casa={casa} key={i}/>
      ))}
    </div>
  )
}
