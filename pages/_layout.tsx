import { Header } from '@layout'


type Props = {
    children: JSX.Element,
  };

  
export default function Layout({ children } : Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
