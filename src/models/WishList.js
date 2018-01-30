import {
  types,
  getParent,
  destroy
} from "mobx-state-tree";

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: ""
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName;
    },
    changeImage(newImage) {
      self.image = newImage;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    remove() {
      getParent(self, 2).remove(self)
    }
  }));

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    },
    remove(item) {
      destroy(item)
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, next) => sum + next.price, 0);
    }
  }));