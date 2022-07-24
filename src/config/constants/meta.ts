import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BearSwap',
  description:
    'The most popular AMM on BSC by user count! Earn BERRIES through yield farming or win it in the Lottery, then stake it in BERRIES Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BearSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://BearSwap.net/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BearSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('BearSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('BearSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('BearSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('BearSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('BearSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BearSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BearSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('BearSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BearSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('BearSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BearSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BearSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BearSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BearSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('BearSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('BearSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('BearSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('BearSwap Info & Analytics')}`,
        description: 'View statistics for BearSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('BearSwap Info & Analytics')}`,
        description: 'View statistics for BearSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('BearSwap Info & Analytics')}`,
        description: 'View statistics for BearSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('BearSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('BearSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('BearSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('BearSwap')}`,
      }
    default:
      return null
  }
}
