---
sidebar_position: 1
---

# Gimo Architecture

Gimo Finance's liquid staking derivatives (LSD) system is built on top of the EVM LSD Stack from StaFi's AI-powered LSaaS that enables users to stake their native tokens and receive liquid staking derivatives in return. This system provides users with enhanced liquidity while maintaining their staking positions and rewards.

## Core Components

### Smart Contracts

The Gimo Finance ecosystem consists of several key smart contracts:

- **StakeManager**: The central contract that orchestrates staking operations, manages validator selection, and handles reward distribution.
- **StakePool**: Acts as the primary interface for user interactions, managing fund flows between stakers and the native staking protocol.
- **LsdToken**: The liquid staking derivative token contract that represents staked positions and enables DeFi composability.

### Relay Network

The Relay Network is a decentralized service that:
- Automates contract interactions
- Ensures continuous system operation
- Maintains system health through regular updates
- Operates in a permissionless manner

### User Interface

The User Interface provides:
- Intuitive staking and unstaking operations
- Real-time position tracking
- Reward monitoring
- Seamless DeFi integration

## Operational Flows

### Staking Process

Users can stake their native tokens through the `stake` function, receiving LSD tokens in return. The conversion rate is calculated as:

```
LSD Amount = Stake Amount * Total LSD / Staked Native Tokens
```

Where:
- `LSD Amount`: Amount of LSD tokens minted
- `Stake Amount`: Amount of native tokens staked
- `Total LSD`: Total LSD tokens in circulation
- `Staked Native Tokens`: Total native tokens locked in the system

### Unstaking Process

LSD holders can initiate unstaking through the `unstake` function, which:
1. Burns LSD tokens
2. Initiates the unbonding process
3. Waits for the unbonding period
4. Returns native tokens to the user

### Reward Distribution

The system implements an automated reward distribution mechanism that:
- Calculates rewards at regular intervals
- Distributes rewards proportionally to stakers
- Updates the LSD token exchange rate
- Maintains system sustainability through platform fees

## Security Framework

Gimo Finance implements multiple security layers:

1. **Access Control**
   - Role-based permissions
   - Multi-signature requirements for critical operations
   - Time-locked administrative functions

2. **Rate Protection**
   - Maximum rate change limits
   - Smoothing mechanisms for rate adjustments
   - Emergency pause functionality

3. **Validator Management**
   - Decentralized validator selection
   - Performance-based rewards
   - Slashing protection

4. **Cross-chain Security**
   - Secure bridge operations
   - Multi-chain validation
   - Fallback mechanisms

## System Features

### Era-based Operations
- Configurable era duration (1-48 hours)
- Per-era reward calculations
- Era-based rate updates
- Validator rotation per era

### Rate Management
- Dynamic exchange rate calculation
- Rate change limits
- Era-based rate tracking
- Automated rate updates

### Emergency Protocols
- System pause functionality
- Emergency withdrawal options
- Validator emergency removal
- Rate freeze capabilities

## Technical Specifications

### Smart Contract Architecture
- Modular design for easy upgrades
- Gas-optimized operations
- Upgradeable components
- Comprehensive event logging

### Network Requirements
- Minimum validator requirements
- Network participation thresholds
- Performance metrics
- Uptime requirements

### Integration Capabilities
- DeFi protocol compatibility
- Cross-chain bridge support
- API endpoints
- SDK availability
