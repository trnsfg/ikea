import './Find.css'


export function Find() {
    return(
        <div className="find">
            <div className="main-conteiner">
                <h1>Знайди те що шукаєш!</h1>
                <div className="img-row-conteiner">
                   <div>
                     <img src='Rectangle19.png' className='img'></img>
                      <div className='img-element1'>
                        <p>Наша нова колекція</p>
                        <button>
                            <img src='Vector2.png'></img>
                        </button>
                    </div>
                   </div>
                   <div>
                     <img src='Rectangle21.png' className='img'></img>
                     <div className='img-element1'>
                        <p>Наші найкращі пропозиції</p>
                        <button>
                            <img src='Vector2.png'></img>
                        </button>
                    </div>
                   </div>
                </div>
                <div className='img-conteiner'>
                    <img src='Rectangle25.png'></img>
                    <div className='img-element2'>
                        <button>
                            <img src='Vector2.png'></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}