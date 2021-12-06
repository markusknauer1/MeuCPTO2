import React, { useState } from 'react'
import '../../../../styles/SubMenuPages/SubMenuTextosAtivadores/modal-textosAtivadores/ModalNovoGrupo.css'

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
        Novo Grupo
      </button>

      {modal && (
        <div className="ModalNovoGrupo">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">Novo Grupo de Ativadores</h2>
            <hr className="hrTitleModal3" />

            <input
              className="textGrupoDesc"
              placeholder="Descrição"
              type="text"
              id="fname"
              name="fname"
              autoComplete="none"
            ></input>

            <textarea
              className="textGrupoDescObs"
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
