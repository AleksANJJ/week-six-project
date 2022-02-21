function Buttons ({fitteredClothes}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => fitteredClothes("dress")}>Dresses</button>
            <button className="change" onClick={() => fitteredClothes("skirt")}>Skirts</button>
            <button className="change" onClick={() => fitteredClothes("pants")}>Pants</button>
            <button className="change" onClick={() => fitteredClothes("shoes")}>Shoes</button>
            <button className="change" onClick={() => fitteredClothes("shirt")}>Shirts</button>
        </div>
    )

}
export default Buttons;