import React from 'react'
import './Capitulo5.css'
import style from './Button.module.css'
import styled from 'styled-components'

const ButtonFour = styled.button`
font-size: 1.5em;
background-color: black;
color: white;
`

const Input = styled.input`
font-size: 1.5em;
background-color: yellow;
color: white;
::-webkit-input-placeholder {
    color: black;
 }
`

const ButtonThree = () => {
    return <button className={style.content, 'btn btn-dark'}>Um botão</button>
}

const Button = () => {
    return <button className="button btn btn-warning" style={{ background: 'yellow' }}>A button</button>
}

const buttonStyle = { background: 'green' }

const ButtonTwo = () => {
    return <button style={buttonStyle}>another button</button>
}

const ButtonFive = styled.button`
    background: ${props => (props.primary ? 'black' : 'white')};
`

const ButtonSix = styled.button`
color: blue;
background: red;
`



export default props =>
    <div>
        <Button />
        <ButtonTwo />
        <ButtonThree />
        <ButtonFour />
        <div>
            <Input placeholder="Teste de React" className="btn btn-warning m-2" style={{ color: 'white' }} type="text" />
        </div>
        <div>
            <ButtonFive>A normal button</ButtonFive>
            <ButtonFive>A normal button</ButtonFive>
            <ButtonFive primary>The primary button</ButtonFive>
        </div>
        <div>
            <ButtonSix>A black button, like all buttons</ButtonSix>
        </div>
    </div>
