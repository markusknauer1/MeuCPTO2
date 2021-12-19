import React, { useState } from 'react'
import '../../../styles/modalPageSidebarDireita.css'

export default function ModalEquipes() {
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
        Nova Equipe
      </button>

      {modal && (
        <div className="modalEquipe">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">
              Nova Equipe
              <hr className="hrTitleModal" />
            </h2>

            <input
              className="fcadastroEquipe"
              placeholder="Nome"
              type="text"
              id="fname"
              name="fname"
              autoComplete="none"
            ></input>

            <select
              name="Selecione"
              className="fgerResp"
              type="text"
              id="fSexo"
            >
              <option value="">Select</option>
              <option value="">Select</option>
              <option value="">Select</option>
            </select>

            <textarea
              className="fObs"
              placeholder="Observações"
              type="text"
              id="fname"
              name="fname"
              row="none"
              maxLength="500"
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
    </>
  )
}
