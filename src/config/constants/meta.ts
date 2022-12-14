import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'UnifySwap',
  description:
    '',
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
        title: `${t('Home')} | ${t('UnifySwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('UnifySwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('UnifySwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('UnifySwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('UnifySwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('UnifySwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('UnifySwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('UnifySwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('UnifySwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('UnifySwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('UnifySwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('UnifySwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('UnifySwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('UnifySwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('UnifySwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('UnifySwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('UnifySwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('UnifySwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('UnifySwap Info & Analytics')}`,
        description: 'View statistics for UnifySwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('UnifySwap Info & Analytics')}`,
        description: 'View statistics for UnifySwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('UnifySwap Info & Analytics')}`,
        description: 'View statistics for BearSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('UnifySwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('UnifySwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('UnifySwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('UnifySwap')}`,
      }
    default:
      return null
  }
}
