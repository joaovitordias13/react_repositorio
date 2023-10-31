import { useState, useEffect } from "react"

const Formulario = () => {
    //Para criar um estado usar
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o estado mudou')
    })

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value;
        })
    }
    const mediaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma /3;

        if (media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>Você não foi aprovado</p>
            )
        }
    }

    return (
        <form action="">
            <ul>
                {[1,2,3,4,5].map(item => 
                <li key={item}>
                    {item}
                </li>
                )}
            </ul>
           
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type='number' placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type='number' placeholder="Nota materia B"  onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type='number' placeholder="Nota materia C"  onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {mediaResultado()}
        </form>
    )
}

export default Formulario