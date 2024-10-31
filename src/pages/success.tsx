import Link from 'next/link'
import {SuccessContainer, ImageContainer} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'

interface successProps {
  customerName: string,
  product: {
    name: string,
    imageUrl: string,
  }
}

export default function Success(props: successProps) {
  return (
   <>
    <Head >
        <title>Compra efetuada | Ignite Shop</title>
        <meta name='robots' content='noindex'/>
    </Head>
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        <Image src={props.product.imageUrl} alt='' width={120} height={110} />

      </ImageContainer>

      <p>
        Uhuul <strong>{props.customerName}</strong>, sua camiseta <strong>{props.product.name}</strong> já está no seu carrinho.
      </p>

      <Link href={'/'} >
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
   </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if(!query.session_id) {
    return {
      redirect: {
        redirect: {
          destination: '/',
          permanent: false
        }
      }

    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      }
    }
  }

}