export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subTitulo() {
        return <h2>{"muitlo legal".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subTitulo()}
            <p>
                {JSON.stringify({nome: 'João', idade: 30})}
            </p>
        </div>
    )
}