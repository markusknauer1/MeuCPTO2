import Modal from '../../MenuDireito/MenuDireito-Modal/ModalCadPessoa'
import '../../../styles/SubMenuPages/SubMenuPessoas/SubMenuPessoas.css'
import { NavDireita } from '../../../components/SideBar/Index'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { ContainerPage, TitlePage2 } from '../../../components/Main'
import { useState } from 'react'

function SubMenuPessoas() {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fCxPesquisa"
            placeholder="Pesquisar"
            type="text"
            id="fname1"
            name="fname"
          />
          <Modal />
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage2>Cadastro Geral de Pessoas</TitlePage2>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="tblSubCod">
                        <div>CÓD</div>
                      </th>
                      <th className="tblSubPessoacod">
                        <div>Pessoa</div>
                      </th>
                      <th className="tblSubMail">
                        <div>E-Mail/login</div>
                      </th>
                      <th className="tblSubMetas">
                        <div>Metas</div>
                      </th>
                      <th className="tblSubAtivo">
                        <div>Ativo</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="btnSubCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>
                    </td>
                    <td className="btnSubOBS">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        João da silva
                      </button>
                    </td>
                    <td className="btnSubMail">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Alex@humanit-ti.com
                      </button>
                    </td>
                    <td className="btnSubMetas">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        <i className="fas fa-bars"></i>
                      </button>
                      <button className="btnSMPMetas"></button>
                    </td>
                    <td className="btnSubAtivo">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>

                  {/* ===============================Modal Alterar Informação da lista============================ */}
                  {modal && (
                    <div className="modalPessoa">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="modalPessoa-content">
                        <h2 className="titleModal">Alterar Pessoa</h2>
                        <hr className="hrTitleModal" />

                        <div className="formCadModal">
                          <input
                            className="fcadastroPessoa1"
                            placeholder="Nome"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <select
                            className="fcadastroPessoa2"
                            name="Sexo"
                            id="fSexo"
                          >
                            <option value="">Sexo</option>
                            <option value="">Feminino</option>
                            <option value="">Masculino</option>
                          </select>
                          <input
                            className="fcadastroPessoa3"
                            id="date"
                            type="date"
                          />

                          <select
                            name="Função"
                            className="fcadastroPessoa4"
                            id="fcontexto"
                          >
                            <option value="">Função - Teste 1</option>
                            <option value="">Função - Teste 2</option>
                            <option value="">Função - Teste 3</option>
                          </select>

                          <input
                            className="fcadastroPessoa5"
                            placeholder="E-Mail"
                            type="text"
                            id="mail"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa6"
                            placeholder="Telefone"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa7"
                            placeholder="Celular"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa8"
                            placeholder="CEP"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <button className="consultaCep">
                            <i className="fas fa-search"></i>
                          </button>
                          <input
                            className="fcadastroPessoa9"
                            placeholder="Endereço"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa10"
                            placeholder="Número"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa11"
                            placeholder="Complemento"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa12"
                            placeholder="Bairro"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa13"
                            placeholder="Cidade"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa14"
                            placeholder="Estado"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <textarea
                            className="fcadastroPessoa15"
                            placeholder="Observações"
                            id="fname"
                            autoComplete="none"
                            rows={0}
                            maxLength={500}
                          />
                          <input
                            className="fcadastroPessoa16"
                            placeholder="Senha"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa17"
                            placeholder="Confirmar Senha"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                          <input
                            className="fcadastroPessoa18"
                            placeholder="Grupo"
                            type="text"
                            id="fname"
                            name="fname"
                            autoComplete="none"
                          />
                        </div>
                        <div className="InputAuthorization1">
                          <label>
                            <input
                              className="CheckAcess1"
                              type="checkbox"
                              defaultChecked={false}
                            />

                            <span className="checkText">Acesso ao APP</span>
                          </label>{' '}
                        </div>
                        <br />
                        <div className="InputAuthorization2">
                          <label>
                            <input
                              className="CheckAcess2"
                              type="checkbox"
                              defaultChecked={false}
                            />
                            <span className="checkText">Acesso Web</span>
                          </label>
                        </div>

                        <button className="close-modal" onClick={toggleModal}>
                          X
                        </button>

                        <button
                          onClick={toggleModal}
                          type="submit"
                          className="gravar-modal"
                        >
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

export default SubMenuPessoas
