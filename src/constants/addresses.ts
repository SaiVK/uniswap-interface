import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'
import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [SupportedChainId.OPTIMISTIC_KOVAN]),
  [SupportedChainId.OPTIMISM]: '0x90f872b3d8f33f305e0250db6A2761B354f7710A',
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  // [SupportedChainId.UZHETH]: '0x3da726164Bd31E4Af1276E3787c0f00480b7b79C',
}
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

/**
 * The older V0 governance account
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The latest governor alpha that is currently admin of timelock
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(
  '0xeD59E0B12aA739d346Fc5116c46f9cD4E6C7012c',
  [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.UZHETH,
  ]
)
export const QUOTER_ADDRESSES: AddressMap = constructSameAddressMap('0xc87bD79814ACF1b1DF67A71041c18E84A7994369', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.UZHETH,
])
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x4fd1c6361c47F18e33DF1946eF12C94aFf5461b5',
  [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.UZHETH,
  ]
)
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.UZHETH]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
export const SWAP_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap('0x57FF9163a4eab9cf0C4D1E7B5A6ACf96CE5718c8', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.UZHETH,
])
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap('0x6bCD5A66aBd8dAFAe8B11F0e9c06748a603fe79a', [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
  SupportedChainId.UZHETH,
])

/*
V3_Factory : 0xeD59E0B12aA739d346Fc5116c46f9cD4E6C7012c

Multicall2 : 0x3da726164Bd31E4Af1276E3787c0f00480b7b79C

WETH9 : 0x3e18B25d4C1D9d34c6dD271Bf5917ca893F9F130

ProxyAdmin : 0x625bd131C243Ec6bf28c431945C901c4B32ac48A

TickLens : 0x65f39cCf95c0C3F1D0fAC5c0e915B48c12a377C8

Quoter : 0xc87bD79814ACF1b1DF67A71041c18E84A7994369

SwapRouter : 0x57FF9163a4eab9cf0C4D1E7B5A6ACf96CE5718c8

NFTDescriptor : 0x9Aa1FE86cbf3013Da8e72b3C293b64f29f08d14A

NonfungibleTokenPositionDescriptor : 0x1B494B9C5dDf4eB0f3EF1FA26beA215470513497

TransparentUpgradeableProxy : 0x3f4c07607DDD69cd82635c910ef74A463d6a71b1

NonfungiblePositionManager : 0x4fd1c6361c47F18e33DF1946eF12C94aFf5461b5

V3Migrator : 0x6bCD5A66aBd8dAFAe8B11F0e9c06748a603fe79a
 
 */
