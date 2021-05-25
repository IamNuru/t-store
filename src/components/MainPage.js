import React from "react";

import Jewellery from './products/jewellery/Jewellery'
import MensClothing from './products/mensClothing/MensClothing'
import WomensClothing from './products/womensClothing/WomensClothing'
import Electronic from './products/electronic/Electronic'


const MainPage = () => {

    return (
        <div className="block">
            <div className="shoes mb-4">
                <h2>Jewellery</h2>
                <Jewellery />
            </div>
            <div className="shirts mb-4">
            <h2>Mens Clothing</h2>
                <MensClothing />
            </div>
            <div className="shirts mb-4">
            <h2>Women's Clothing</h2>
                <WomensClothing />
            </div>
            <div className="technology mb-2">
            <h2>Electronics</h2>
                <Electronic />
            </div>
        </div>
    )
}

export default MainPage
