import s from '.card.module.css'

export const Card = (props) => {
    <div key={props.id} className={s.cards}>
        <img src={props.imagem} alt={props.nome} />
        <h4>name: {props.nome}</h4>
        <p>Species: {props.especies}</p>
        {props.status === "Dead" ? "Status:💀" : props.status === "Alive" ? "Status:❤️" : <p>Status: {props.status}</p>}
        <p>Origin: {props.origem.nome}</p>
    </div>
}