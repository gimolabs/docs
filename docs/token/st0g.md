---
sidebar_position: 1
---

# Liquid Staking Token (st0G)

## Interest-Bearing & Liquid
The st0G token offers a unique combination of benefits: it accrues yield while maintaining full liquidity within the 0G ecosystem. This dual functionality allows users to optimize their holdings without sacrificing flexibility.

## Seamless Integration
st0G is fully compatible with a variety DeFi applications across the 0G network. This compatibility creates expanded opportunities for yield generation and cross-protocol utility.

## Stake
Gimo Finance offers a liquid staking process similar to other LSD protocols. Users can stake A0GI via the Gimo App and immediately receive a corresponding amount of st0G in their wallets, representing their staked position.

## Unstake
Unstaking involves two steps: submitting an unstake request and withdrawing the underlying asset. When a user submits an unstake request, their st0G is burned to reserve an equivalent amount of A0GI for future withdrawal. No rewards are accrued post-unstake.

## Withdraw

The withdrawal process is designed to be efficient and fair. Users can withdraw immediately when the protocol has sufficient liquidity. During high-demand periods, withdrawals are processed in a queue which follows a first-come, first-serve principle. 

## Rewards Distribution
Gimo Finance applies a 10% commission fee to staking rewards. For every 100 A0GI received:

| Role | Amount | Formula |
| --- | --- | --- |
| Users | $90$ | $100 × (1 - 0.1)$ |
| Gimo Finance | $10$ | $100 × 0.1$ |

## Exchange Rate Dynamics
st0G is an interest-bearing asset whose value continuously appreciates as rewards accumulate. A0GI staked via the Gimo App is transferred to the 0G Staking Vault, with rewards periodically calculated and reflected on-chain in the exchange rate.

Since there is no slashing, the st0G exchange rate is guaranteed to increase over time, allowing later redeemers to potentially receive more A0GI than earlier ones.

The exchange rate ($C_{r}$) is calculated as:

$$
C_{r} = \frac{(Q_{stk} - Q_{red}) + Q_{rew} × (1 - R_{com})}{M - N}
$$

Where:

- The total amount of A0GI staked in the Staking Contract: $Q_{tsk}$
- The total amount of redeemed A0GI: $Q_{red}$
- The amount of staking rewards: $Q_{rew}$
- The commission ratio: $R_{com}$
- The total amount of st0G minted: $M$
- The total amount of st0G burned: $N$

## Yield Structure

The protocol's yield structure as follows:

- Network participation metrics
- Total protocol stake
- Market dynamics

Token holders may monitor their staking performance and the protocol's annual percentage yield (APY) through the integrated dashboard interface.
