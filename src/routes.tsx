import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import {
  FormularioCadastro,
  Home,
  Pessoas,
  Relatorio
} from '../src/pages/Overview'
import {
  Area,
  Atividades,
  Equipes,
  Gerencias,
  Observacoes,
  Unidades
} from './pages/pagesNavDireita'
import ObservCpto from './pages/DetalhesDaObservação/ObservCpto'
import {
  MesSetor,
  UniClienteExe,
  UniClieSetor,
  UniContribSetor
} from './pages/UnidadesCadastradas/UnitInformation'
import SubMenuTextActive from './pages/SubMenuPages/SubMenuTextosAtivadores/SubMenuTextosAtivadores'
import SubMenuPessoas from './pages/SubMenuPages/SubMenuPessoas/SubMenuPessoas'
import SubMenuEmpresas from './pages/SubMenuPages/SubMenuEmpresas/SubMenuEmpresas'
import SubMenuTipoDeObservacao from './pages/SubMenuPages/SubMenuTiposDeobservaçoes/SubMenuTipoDeObservacao'
import SubMenuGruposUsuarios from './pages/SubMenuPages/SubMenuGruposDeUsuario/SubMenuGruposUsuarios'
import TQOQuestoesReg from './pages/SubMenuPages/SubMenuTiposDeobservaçoes/Questões-tiposDeQuestões/TQOQuestoesReg'
import PermissoesDeAcessoAoSistema from './pages/SubMenuPages/SubMenuGruposDeUsuario/pages-GruposDeUsuario/PermissoesDeAcessoAoSistema'
import AtivadoresSociais from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresSociais'
import AtivadoresPsicologicos from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresPsicologicos'
import AtivadoresPessoal from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresPessoal'
import AtivadoresFisiologicos from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresFisiologicos'
import AtivadoresCognitivos from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresCognitivos'
import TipoQualidadeDeObservacao from './pages/SubMenuPages/SubMenuTiposDeobservaçoes/tipoQualidadeDeObservacao'

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      {/* ------------ menu princial ----------------------------*/}
      <Route path="/Home" component={Home} />
      <Route path="/FormularioCadastro" component={FormularioCadastro} />
      <Route path="/Pessoas" component={Pessoas} />
      <Route path="/Relatorio" component={Relatorio} />

      {/* ======================sidebar direita========================== */}
      <Route path="/Unidades" component={Unidades} />
      <Route path="/Pessoas" component={Pessoas} />
      <Route path="/Equipes" component={Equipes} />
      <Route path="/Gerencias" component={Gerencias} />
      <Route path="/Atividades" component={Atividades} />
      <Route path="/Area" component={Area} />
      <Route path="/Observacoes" component={Observacoes} />

      {/* -------- relaçao de paginas da tela relatório ------------*/}
      <Route path="/UniClienteExe" component={UniClienteExe}></Route>
      <Route path="/UniClieSetor" component={UniClieSetor}></Route>
      <Route path="/MesSetor" component={MesSetor}></Route>
      <Route path="/UniContribSetor" component={UniContribSetor}></Route>
      <Route path="/ObservCpto" component={ObservCpto}></Route>
      {/* ---------------- SUB MENU Gerencia----------------- */}
      <Route path="/SubMenuTextActive" component={SubMenuTextActive}></Route>
      <Route path="/SubMenuPessoas" component={SubMenuPessoas}></Route>
      <Route path="/SubMenuEmpresas" component={SubMenuEmpresas}></Route>
      <Route
        path="/SubMenuTipoDeObservacao"
        component={SubMenuTipoDeObservacao}
      ></Route>
      <Route
        path="/SubMenuGruposUsuarios"
        component={SubMenuGruposUsuarios}
      ></Route>
      {/*--------------acesso do sub Menu (tipo de observaçao)-------------*/}
      <Route
        path="/tipoQualidadeDeObservacao"
        component={TipoQualidadeDeObservacao}
      ></Route>
      <Route path="/TQOQuestoesReg" component={TQOQuestoesReg}></Route>
      <Route
        path="/PermissoesDeacessoAoSistema"
        component={PermissoesDeAcessoAoSistema}
      ></Route>
      {/* ------------espaço para telas do page textos ativadores----------*/}
      <Route path="/AtivadoresSociais" component={AtivadoresSociais}></Route>
      <Route
        path="/AtivadoresPsicologicos"
        component={AtivadoresPsicologicos}
      ></Route>
      <Route path="/AtivadoresPessoal" component={AtivadoresPessoal}></Route>
      <Route
        path="/AtivadoresFisiológicos"
        component={AtivadoresFisiologicos}
      ></Route>
      <Route
        path="/AtivadoresCognitivos"
        component={AtivadoresCognitivos}
      ></Route>
    </Switch>
  )
}

export default Routes
