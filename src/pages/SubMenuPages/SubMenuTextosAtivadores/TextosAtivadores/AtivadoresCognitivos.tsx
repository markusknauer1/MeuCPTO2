import Modal from '../modal-textosAtivadores/ModalNovoAtivador'
import '../../../../styles/SubMenuPages/SubMenuTextosAtivadores/pages-textosAtivadores/AtivadoresPadrao.css'
import { useHistory } from 'react-router-dom'
import * as TypIcons from 'react-icons/ti'
import { NavDireita } from '../../../../components/SideBar/Index'
import ProfileDireita from '../../../../components/ProfileDireita'
import SidebarMobile from '../../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { ContainerPage, TitlePage4 } from '../../../../components/Main'
import { useState } from 'react'

function AtivadoresCognitivos() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  let history = useHistory()
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fnamePadrao"
            placeholder="Pesquisar"
            type="text"
            id="fname7"
            name="fname"
          />
          <button
            className="btnReturn"
            type="button"
            onClick={() => history.goBack()}
          >
            <TypIcons.TiArrowBackOutline />
          </button>
          <Modal />
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage4>Ativadores: Cognitivos</TitlePage4>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="tblActivPadrao1">
                        <div>CÓD</div>
                      </th>
                      <th className="tblActivPadrao2">
                        <div>Texto Ativador</div>
                      </th>
                      <th className="tblActivPadrao3">
                        <div>Observações/Aplicação</div>
                      </th>
                      <th className="tblActivPadrao4">
                        <div>Peso</div>
                      </th>
                      <th className="tblActivPadrao5">
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="tblActivPadrao6">001</td>
                    <td className="tblActivPadrao7">
                      <button
                        onClick={toggleModal}
                        className="altInfoModPessoa"
                      >
                        Cognitivos
                      </button>
                    </td>
                    <td className="tblActivPadrao8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure iusto eius suscipit, repellat perferendis praesentium
                      obcaecati aliquid a recusandae alias dolorum mollitia?
                      Eligendi doloribus quia amet earum numquam, assumenda
                      consequuntur.
                    </td>
                    <td className="tblActivPadrao9">0,00</td>
                    <td className="tblActivPadrao10">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  {/* ============================================================= */}
                  {modal && (
                    <div className="ModalNovoAtivador">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="modalPadrao-content">
                        <h2 className="titleModal">
                          Alterar Ativador
                          <hr className="hrTitleModal" />
                        </h2>

                        <input
                          className="textActiveDesc"
                          placeholder="Descrição"
                          type="text"
                          id="fname"
                          autoComplete="none"
                          name="fname"
                        ></input>
                        <input
                          className="textActivePeso"
                          placeholder="Peso"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        ></input>

                        <textarea
                          className="textActiveObs"
                          placeholder="Observações"
                          id="fname"
                          name="fname"
                          maxLength={500}
                          autoComplete="none"
                        ></textarea>

                        <button className="close-modal" onClick={toggleModal}>
                          X
                        </button>
                        <button onClick={toggleModal} className="gravar-modal">
                          Salvar Registro
                        </button>
                      </div>
                    </div>
                  )}
                </table>
              </div>
            </section>
          </div>
        </div>
        <div className="buttonProfileDireita">
          <NavDireita />
        </div>
      </ContainerPage>
    </div>
  )
}

export default AtivadoresCognitivos
