import { useState } from 'react'
import '../../../styles/modalPageSidebarDireita.css'

export default function ModalPessoa() {
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
        Nova Pessoa
      </button>

      {modal && (
        <div className="modalPessoa">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPessoa-content">
            <h2 className="titleModal">Nova Pessoa</h2>
            <hr className="hrTitleModal" />

            <div className="formCadModal">
              <input
                className="fcadastroNovaPessoa1"
                placeholder="Nome"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <select className="fcadastroNovaPessoa2" name="Sexo" id="fSexo">
                <option value="">Sexo</option>
                <option value="">Feminino</option>
                <option value="">Masculino</option>
              </select>
              <input className="fcadastroNovaPessoa3" id="date" type="date" />

              <select
                name="Função"
                className="fcadastroNovaPessoa4"
                id="fcontexto"
              >
                <option value="">Função - Teste 1</option>
                <option value="">Função - Teste 2</option>
                <option value="">Função - Teste 3</option>
              </select>

              <input
                className="fcadastroNovaPessoa5"
                placeholder="E-Mail"
                type="text"
                id="mail"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa6"
                placeholder="Telefone"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa7"
                placeholder="Celular"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa8"
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
                className="fcadastroNovaPessoa9"
                placeholder="Endereço"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa10"
                placeholder="Número"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa11"
                placeholder="Complemento"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa12"
                placeholder="Bairro"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa13"
                placeholder="Cidade"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa14"
                placeholder="Estado"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <textarea
                className="fcadastroNovaPessoa15"
                placeholder="Observações"
                id="fname"
                autoComplete="none"
                rows={0}
                maxLength={500}
              />
              <input
                className="fcadastroNovaPessoa16"
                placeholder="Senha"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa17"
                placeholder="Confirmar Senha"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroNovaPessoa18"
                placeholder="Grupo"
                type="text"
                id="fname"
                name="fname"
                autoComplete="none"
              />
            </div>
            <div className="InputAuthorization11">
              <label>
                <input
                  className="CheckAcess1"
                  type="checkbox"
                  defaultChecked={false}
                />

                <span className="checkText1">Acesso ao APP</span>
              </label>{' '}
            </div>
            <br />
            <div className="InputAuthorization21">
              <label>
                <input
                  className="CheckAcess2"
                  type="checkbox"
                  defaultChecked={false}
                />
                <span className="checkText1">Acesso Web</span>
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
    </>
  )
}
