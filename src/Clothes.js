function Clothes ({clothesProps}) {
    return (
        <div className="products">
            {clothesProps.map((element => {
                const {id, name, price, image} = element;

                return (
                    <div className="product-card" key={id}>
                        <img src={image} width="300px" height="400px" alt="foto"/>
                        <div>
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothes;