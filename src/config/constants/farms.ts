import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'BERRIES',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xf0F80C9fA32DcE1bA3Baf60E3697E3542044dE8c',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'BERRIES-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xFa7334b8Bc53F31f0944a48f9c5480e586Be48A8',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  }
 

  ,
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  }
  ,
  {
    pid: 3,
    lpSymbol: 'BEAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x42CA7D71c20a7f80184F3bB201d9c3281C12F027',
    },
    token: serializedTokens.bear,
    quoteToken: serializedTokens.wbnb,
  }
  
  
  
 
]

export default farms
