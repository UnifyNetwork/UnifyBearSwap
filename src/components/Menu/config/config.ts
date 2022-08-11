import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Exchange'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      {
        label: t('Bridge'),
        href: 'https://Bridge.BearSwap.net',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: 'More',
    href: 'https://ProtocolBEAR.com',
    icon: 'More',
    hideSubNav: false,
    items: [
      {
        label: t('Website'),
        href: 'https://ProtocolBEAR.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
          label: t('Docs - coming soon'),
          href: '/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
          
        },
        {
          label: t('Community'),
          href: 'https://t.me/ProtocolBEAR',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
    ],
  },
]
