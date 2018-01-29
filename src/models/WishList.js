import { types } from 'mobx-state-tree'

export const WishListItem = types
    .model({
        name: types.string,
        price: types.number,
        image: ""
    })
    .actions(self => ({
        changeName(newName){
            self.name = newName
        },
        changeImage(newImage){
            self.image = newImage
        },
        changePrice(newPrice){
            self.price = newPrice
        }
    }))

export const WishList = types
.model({
    items: types.optional(types.array(WishListItem), [])
})
.actions(self => ({
    add(item) {
        self.items.push(item)
    }
}))
.views(self => ({
    get totalPrice() {
        return self.items.reduce((sum, next) => sum + next.price, 0)
    }
}))
