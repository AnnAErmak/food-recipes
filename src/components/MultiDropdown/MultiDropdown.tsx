import React from 'react';
import cn from "classnames";
import Input from "../Input";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import Text from "../Text";
import "./MultiDropdown.css"

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  className?: string;
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
     className,
     options,
     value,
     onChange,
     disabled,
     getTitle
   }) => {

  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const ref = React.useRef<HTMLInputElement>(null)
  const [filter, setFilter] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  const open = () => setIsOpen(true)

  React.useEffect(()=>{
    const handlerClick = (e: MouseEvent) => {
      if(!wrapperRef.current?.contains(e.target as HTMLElement)) setIsOpen(false)
    }
    window.addEventListener('click', handlerClick)

    return () => window.removeEventListener('click', handlerClick)

  }, [])

  React.useEffect(()=>{
    if(isOpen) setFilter('')
  }, [isOpen])

  const title = React.useMemo(()=> getTitle(value), [getTitle, value])

  const isEmpty = value.length === 0

  const filterOptions = React.useMemo(()=>{
    const str = filter.toLocaleLowerCase()
    return options.filter(
        (o) =>o.value.toLocaleLowerCase().indexOf(str) === 0
    )
  }, [filter, options])

  const selectedKeysSet = React.useMemo<Set<Option['key']>>(
    ()=> new Set(value.map(({key}) => key))
  , [value])

  const onSelect = React.useCallback(
      (option: Option) => {
        if(disabled) return

      if(selectedKeysSet.has(option.key)){
        onChange([...value].filter(({key}) => key !== option.key))
      }else {
        onChange([...value, option])
      }
      ref.current?.focus()
}, [disabled, onChange, value, selectedKeysSet]
  )

  const opened = isOpen && !disabled

  return (
      <div className={cn(className, 'multi-dropdown')} ref={wrapperRef}>
        <Input
            className={"multi-dropdown__field"}
            onClick={open}
            disabled={disabled}
            placeholder={title}
            value={opened ? filter : isEmpty ? '' : title}
            onChange={setFilter}
            afterSlot={<ArrowDownIcon color={"secondary"} />}
            ref={ref}
            />
        {opened && (
            <div className={'multi-dropdown__options'}>
              {filterOptions.map((option: Option) => (
                  <button
                  className={cn(
                      "multi-dropdown__option",
                      selectedKeysSet.has(option.key) &&
                      "multi-dropdown__option_selected",
                  )}
                  key={option.key}
                  onClick={() => onSelect(option)}
                  >
                    <Text view={"p-16"}>{option.value}</Text>
                  </button>
              ))}
            </div>
        )}
      </div>
  )

};

export default MultiDropdown;
