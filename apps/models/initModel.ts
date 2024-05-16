import { ISettingModel } from './settingModel'
import { IUserModel } from './userModel'

export interface IInitModel {
  settings: ISettingModel
  isAuth: boolean
  user: IUserModel
}
