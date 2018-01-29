import React from 'react'
import { observer } from 'mobx-react'

import WishListItemView from './wishListItemView'

const WishListView = ({ wishList }) =>(
    <div>
        <ul>{wishList.items.map((item, index) => <WishListItemView item={item} key={index} />)}</ul>
        <h3>Total: {wishList.totalPrice} $</h3>
    </div>
)

export default observer(WishListView)