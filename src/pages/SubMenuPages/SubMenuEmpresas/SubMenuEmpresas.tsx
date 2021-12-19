import { useState } from 'react'
import { ContainerPage, TitlePage4 } from '../../../components/Main'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { NavDireita } from '../../../components/SideBar/Index'
import '../../../styles/SubMenuPages/SubMenuEmpresas/SubMenuEmpresas.css'
import Modal from './modal-Empresas/AlterarRegistroEmpresas'

function SubMenuEmpresas() {
  const [image, setImage] = useState('')
  const [endImg] = useState('./perfil.png')

  const uploadImage = async (e: any) => {
    e.preventdefault()
    const formData = new FormData()
    formData.append('image', image)
  }

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
            <TitlePage4>Cadastro Geral de Empresas</TitlePage4>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="tblSubEmpresaCod">
                        <div>Cód</div>
                      </th>
                      <th className="tblSubEmpresaEmpresa">
                        <div>Empresa</div>
                      </th>
                      <th className="tblSubEmpresaAtivo">
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="btnSubEmpresaCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>
                    </td>
                    <td className="btnSubEmpresaOBS">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Humanit-TI
                      </button>
                    </td>
                    <td className="btnSubEmpresaAtivo">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>

                  {/* ============================================================================ */}

                  {modal && (
                    <div className="AlterarRegistroEmpresas">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="AlterarRegistroEmpresas-content">
                        <h2 className="titleModal">Alterar Registro</h2>

                        <hr className="hrTitleModal2" />
                        <input
                          className="fNomeFantasiaEmpresa"
                          placeholder="Nome Fantasia"
                          type="text"
                          id="fname"
                          name="fname"
                        ></input>

                        <form onSubmit={uploadImage}>
                          <div className="form-group">
                            {image ? (
                              <img
                                src={URL.createObjectURL(image)}
                                alt="perfil"
                                className="imgProfileEmpresa"
                                width="150"
                                height="150"
                              />
                            ) : (
                              <img
                                src={endImg}
                                alt="Perfil"
                                className="imgProfile"
                              />
                            )}
                            <input
                              type="file"
                              name="image"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              onChange={(e: any) => setImage(e.target.files[0])}
                            />
                          </div>
                        </form>

                        <input
                          className="fRazãoSocialEmpresa"
                          placeholder="Razão Social"
                          type="text"
                          id="fname"
                          name="fname"
                        ></input>

                        <select className="fSelectTipEmpresa">
                          <option value="">Selecione o Tipo de Empresa:</option>
                          <option value="">
                            Auditoria de Atividades e Processos
                          </option>
                          <option value="">Papel e Celulose</option>
                        </select>

                        <input
                          className="fCNPJEmpresa"
                          placeholder="CNPJ"
                          id="fname"
                          name="fname"
                        ></input>

                        <input
                          className="fInscEst"
                          placeholder="Inscrição Estadual"
                          id="fname"
                          name="fname"
                        ></input>

                        <textarea
                          className="fObsEmpresa"
                          placeholder="Observações"
                          id="fname"
                          name="fname"
                          maxLength={500}
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

export default SubMenuEmpresas
