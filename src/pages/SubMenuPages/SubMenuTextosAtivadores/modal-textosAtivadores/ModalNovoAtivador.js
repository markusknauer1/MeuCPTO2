import React, { useState } from 'react'
import '../../../../styles/SubMenuPages/SubMenuTextosAtivadores/modal-textosAtivadores/ModalNovoAtivador.css'

export default function Modal() {
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
        Novo Ativador
      </button>

      {modal && (
        <div className="ModalNovoAtivador">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">
              Novo Ativador
              <hr className="hrTitleModal" />
            </h2>

            <input
              className="textActiveDesc"
              placeholder="Descrição"
              type="text"
              id="fname"
              name="fname"
              autoComplete="none"
            ></input>
            <input
              className="textActivePeso"
              placeholder="Peso"
              type="text"
              id="fname"
              autoComplete="none"
              name="fname"
            ></input>

            <textarea
              className="textActiveObs"
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
