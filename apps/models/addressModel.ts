import { IRootModel } from './rootModel'

export interface IAddressesModel {
  addressId: string
  addressUserId: string
  addressUserName: string
  addressKontak: string
  addressDetail: string
  addressPostalCode: string
  addressProvinsi: string
  addressKabupaten: string
  addressKecamatan: string
}

export interface IAddressesCreateRequestModel {
  addressUserName: string
  addressKontak: string
  addressDetail: string
  addressPostalCode: string
  addressProvinsi: string
  addressKabupaten: string
  addressKecamatan: string
}

export interface IAddressesUpdateRequestModel {
  addressId: string
  addressUserId?: string
  addressUserName?: string
  addressKontak?: string
  addressDetail?: string
  addressPostalCode?: string
  addressProvinsi?: string
  addressKabupaten?: string
  addressKecamatan?: string
}
