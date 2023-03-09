import { chainId } from 'wagmi'

// Enums
export enum SupportedChainId {
    OPTIMISM = chainId.optimism,
    OPTIMISM_GOERLI = chainId.optimismGoerli,
    LOCAL = 31337,
}

export enum TimeHorizonRange {
    FIVE_DAYS = '5d',
    FIFTEEN_DAYS = '15d',
    ONE_MONTH = '1M',
    THREE_MONTHS = '3M',
    SIX_MONTHS = '6M',
    TWELVE_MONTHS = '12M',
}

export enum SimulationMode {
    SIM,
    WALLET,
}

export enum MetricsTabOptions {
    // CURRENT = 'Current',
    HISTORIC = 'Historic Backtesting',
    PREDICTION = 'Predictive Prices',
}

export enum Asset {
    USDC = 'USDC',
    ETH = 'ETH',
}

export enum ResolutionTabOptions {
    THIRTY_MINUTES = '30m',
    ONE_HOUR = '1h',
    FOUR_HOURS = '4h',
    ONE_DAY = '1d',
}

export enum RestrictedLocations {
    US = 'US',
}

export enum TermsOfServiceModalTrigger {
    BANNED = 'BANNED',
    LOCATION_RESTRICTED = 'LOCATION_RESTRICTED',
    USER_CLICK = 'USER_CLICK',
    FIRST_LOAD = 'FIRST_LOAD',
}

export enum TokenSymbolLookup {
    PERP = 'PERP',
}
