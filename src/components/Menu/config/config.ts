import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Exchange'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: true,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Bridge'),
        href: 'https://Bridge.BearSwap.net',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
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
    label: t('Win'),
    href: '/prediction',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    supportChainIds: [ChainId.BSC],
    items: [
      {
        label: t('Prediction (BETA)'),
        href: 'https://pancakeswap.finance/prediction',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Lottery'),
        href: '/lottery',
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: MoreIcon,
    hideSubNav: true,
    supportChainIds: [ChainId.BSC],
    items: [
      {
        label: t('Website'),
        href: 'https://protocolBEAR.com',
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

export default config
