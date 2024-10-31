import Link from 'next/link'
import {SuccessContainer, ImageContainer} from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Cassiano Candido</strong>, sua camiseta <strong>Beyond the limits</strong> já está no seu carrinho.
      </p>

      <Link href={'/'} >
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}