import { FormControl, Input, WarningOutlineIcon } from 'native-base'
import { BASE_COLOR } from '../../utilities/baseColor'

interface IInputFieldModel {
  isInvalid: boolean
  handleOnChange?: (value: any) => void
  value?: any
  errorMessage: string
  title: string
  placeHolder: string
  onFocuse?: () => void
  icon?: any
  defaultValue?: any
  isDisabled?: boolean
  isReadOnly?: boolean
  keyboardType?: any
}

export function InputField(props: IInputFieldModel) {
  return (
    <FormControl>
      <FormControl.Label>{props.title}</FormControl.Label>
      {props.icon && (
        <Input
          isDisabled={props.isDisabled}
          isReadOnly={props.isReadOnly}
          isInvalid={props.isInvalid}
          onChangeText={props.handleOnChange}
          value={props.value}
          keyboardType={props.keyboardType}
          bgColor='#FFF'
          defaultValue={props.defaultValue}
          onFocus={props.onFocuse}
          InputLeftElement={props.icon}
          placeholder={props.placeHolder}
          _focus={{
            bg: BASE_COLOR.blue[100],
            borderColor: BASE_COLOR.primary
          }}
        />
      )}
      {!props.icon && (
        <Input
          isDisabled={props.isDisabled}
          isReadOnly={props.isReadOnly}
          isInvalid={props.isInvalid}
          onChangeText={props.handleOnChange}
          keyboardType={props.keyboardType}
          bgColor='#FFF'
          type='number'
          onFocus={props.onFocuse}
          defaultValue={props.defaultValue}
          placeholder={props.placeHolder}
        />
      )}
      <FormControl.ErrorMessage
        isInvalid={props.isInvalid}
        leftIcon={<WarningOutlineIcon size='xs' />}
        _text={{
          fontSize: 'xs'
        }}
      >
        {props.errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
