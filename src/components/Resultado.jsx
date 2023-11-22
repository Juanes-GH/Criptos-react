import styled from "@emotion/styled";

const Contenedor = styled.div`
    background-color: #c6dbff;
    color: #FFFF;
    font-family: 'Lato', sans-serif;
    display:flex;
    align-items: center;
    border-radius: 10px;
    border: 8px solid  #69a4fb;
    margin-top: 30px;
    gap: 2rem;
`

const Imagen = styled.img `
    display: block;
    width: 150px;
`

const Texto = styled.p`
    font-size: 18px;
    Span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
        Span{
            font-weight: 700;
        }
`

const Resultado = ({resultadoCotizacion}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultadoCotizacion

  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto"/>
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>El Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última Actualizacion:  <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado

