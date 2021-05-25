import React from "react";

import { Switch, Route} from "react-router-dom";
import MainPage from './MainPage'
import Electronic from "./products/electronic/Electronic";
import MensClothing from "./products/mensClothing/MensClothing";
import WomensClothing from "./products/womensClothing/WomensClothing";
import Jewellery from "./products/jewellery/Jewellery";
import Cart from "./Cart";
import Search from "./SearchPage";

const Main = () => {

  return (
    <div className="md:ml-48 mt-48 md:mt-24 pl-4">
        <Switch> 
          <Route exact path="/electronics" component={Electronic} />
          <Route exact path="/men's clothing" component={MensClothing} />
          <Route exact path="/women's clothing" component={WomensClothing} />
          <Route exact path="/jewellery" component={Jewellery} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search" component={Search} />
          <Route path="/" component={MainPage} />
        </Switch>
    </div>
  );
};

export default Main;
