import React, { useState } from 'react'
import '../../../../styles/SubMenuPages/SubMenuEmpresas/Modal-SubMenuEmpresas/AlterarRegistroEmpresas.css'

export default function Modal() {
  const [image, setImage] = useState('')
  const [endImg] = useState('./perfil.png')

  const uploadImage = async e => {
    e.preventdefault()
    const formData = new FormData()
    formData.append('image', image)
  }

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="buttonModalPadrao">
        Novo Registro
      </button>

      {modal && (
        <div className="AlterarRegistroEmpresas">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="AlterarRegistroEmpresas-content">
            <h2 className="titleModal">
              Novo Registro
              <hr className="hrTitleModal" />
            </h2>

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
                  <img src={endImg} alt="Perfil" className="imgProfile" />
                )}
                <input
                  type="file"
                  name="image"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={e => setImage(e.target.files[0])}
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

            <select className="fSelectTipEmpresa" type="text">
              <option value="">Selecione o Tipo de Empresa:</option>
              <option value="">Auditoria de Atividades e Processos</option>
              <option value="">Papel e Celulose</option>
            </select>

            <input
              className="fCNPJEmpresa"
              placeholder="CNPJ"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <input
              className="fInscEst"
              placeholder="Inscrição Estadual"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <textarea
              className="fObsEmpresa"
              placeholder="Observações"
              type="text"
              id="fname"
              name="fname"
              row="none"
              maxLength="500"
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
    </>
  )
}
