import React, { useState } from 'react'
import '../../../styles/modalPageSidebarDireita.css'

export default function ModalAtividade() {
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
        Nova Atividade
      </button>
      {modal && (
        <div className="modalAtividade">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">Nova Atividade</h2>
            <hr className="hrTitleModal1" />

            <input
              className="fDescAtividade"
              placeholder="Nova Atividade"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <textarea
              className="fObsAtividade"
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
