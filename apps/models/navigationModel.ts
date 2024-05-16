import { IProductModel } from './productsModel'

export type INavigationParamList = {
  navigate(arg0: string): unknown
  Main: undefined
  Home: undefined
  SignUp: undefined
  Login: undefined
  Profile: undefined
  Cart: undefined
  Order: undefined
  Product: undefined
  ProductPurchase: {
    product: {
      productColorSelected: string
      productSizeSelected: string
      totalItemSelected: number
      detailProduct: IProductModel | any
    }
  }
  ProductDetail: { productId: string }
  ProductCheckOut: { totalPrice: number }
  Notification: undefined
  Address: undefined
  CreateAddress: undefined
  UpdateAddress: { addressId: string }
  HistoryTransaction: undefined
  VerifyWhatsAppNumber: undefined
}
