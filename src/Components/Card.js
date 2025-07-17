import './Card.css'

export function Card (props) {
    return(
        <div>
            <div className="card">
                <img src={props.img}></img>
                <div className='card-text-conteiner'>
                <div><b>{props.title}</b></div>
                <div>спальна кімната...</div>
                <div><b>{props.prise}$</b></div>
                </div>
            </div>
        </div>
    )
}