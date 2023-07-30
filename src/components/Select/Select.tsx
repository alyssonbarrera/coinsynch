import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames'
import { Listbox } from '@headlessui/react'

import { CoinDTO } from '@/dtos/CoinDTO'

type SelectProps = {
  data: CoinDTO[]
  name: string
  onSelectedItem: (item: CoinDTO) => void
}

export function Select({ data, name, onSelectedItem }: SelectProps) {
  const [selectedItem, setSelectedItem] = useState<CoinDTO | null>(null)

  const handleSelectItem = (item: CoinDTO) => {
    setSelectedItem(item)
    onSelectedItem(item)
  }

  return (
    <Listbox name={name} value={selectedItem} onChange={handleSelectItem}>
      <Listbox.Button
        className={classNames(
          'h-12 w-full rounded-md border border-secondary-300 px-4 text-left text-color-base',
          !selectedItem && 'text-opacity-50',
        )}
      >
        {selectedItem ? (
          <div className="flex gap-2">
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              width={16}
              height={16}
            />
            <div className="flex gap-1 text-sm leading-5">
              <p className="text-color-base">{selectedItem.name}</p>
              <span className="uppercase text-secondary-500">
                {selectedItem.symbol}
              </span>
            </div>
          </div>
        ) : (
          'Choose'
        )}
      </Listbox.Button>
      <Listbox.Options className="absolute top-[3.3rem] z-10 max-h-64 w-full overflow-y-auto rounded-md border border-secondary-300 bg-white">
        {data.map((item) => (
          <Listbox.Option
            key={item.id}
            value={item}
            className="flex h-12 cursor-pointer items-center border-b border-secondary-300 px-6"
          >
            <div className="flex gap-2">
              <Image src={item.image} alt={item.name} width={16} height={16} />
              <div className="flex gap-1 text-sm leading-5">
                <p className="text-color-base">{item.name}</p>
                <span className="uppercase text-secondary-500">
                  {item.symbol}
                </span>
              </div>
            </div>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
