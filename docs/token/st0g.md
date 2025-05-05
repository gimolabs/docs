---
sidebar_position: 1
---

# Liquid Staking Token (st0G)

### \$st0G: Liquid Staking for the AI-Native Economy

Gimo Finance introduces \$st0G as the liquid staking derivative of \$A0GI, designed to meet the demands of 0G’s modular and AI-optimized DeFi landscape. It enables users to earn staking rewards while retaining full liquidity, composability, and protocol-level access across the broader ecosystem.

- **Yield-Bearing, Fully Composable:** \$st0G transforms staked \$A0GI into a yield-accruing, transferable asset. Users can benefit from continuous staking returns while utilizing \$st0G in DeFi applications—maximizing capital efficiency without locking up funds.
- **Seamless DeFi Integration:** Built to power programmable capital flows, \$st0G integrates with lending protocols, liquidity pools, yield optimizers, and more within the 0G ecosystem. This composability supports complex, modular strategies aligned with the needs of autonomous finance.
- Non-Custodial Staking Process: Through Gimo’s Launch App, users stake \$A0GI and instantly receive \$st0G. This operation is fully decentralized and non-custodial, secured by StaFi’s AI-powered LSaaS framework, ensuring both safety and composability at the protocol level.

### Unstaking & Withdrawal Logic

Unstaking begins with burning \$st0G to reserve the corresponding \$A0GI amount. No rewards accrue after the burn, maintaining accounting clarity. Withdrawals are aligned with 0G’s 22-day epoch cycle:

- Every 22 days, Gimo receives the principal and rewards from the underlying staking.
- Requests are processed on a first-come, first-served basis.
- If liquidity is available, withdrawals are instant; otherwise, they roll over to the next cycle.

**Note:** All pending requests are transparently tracked in-app, with a maximum withdrawal window capped at 90 days to preserve predictability and user trust.

### **Rewards Distribution**

Gimo Finance charges a 10% commission on staking rewards—meaning that for every 100 \$ A0GI earned, 10 $A0GI is retained as a fee.

| Role | Amount | Formula |
| --- | --- | --- |
| Users | $90$ | $100 × (1 - 0.1)$ |
| Gimo Finance | $10$ | $100 × 0.1$ |

### **Exchange Rate**

The `st0G` token functions as an interest-bearing asset—its value steadily climbs as staking rewards accrue. When \$A0GI is staked through the Gimo Launch App, it moves into the 0G Staking Vault. Rewards are calculated at regular intervals and automatically reflected in the on-chain exchange rate.

The exchange rate ($C_{r}$) is calculated as:

$$
C_{r} = \frac{(Q_{stk} - Q_{red}) + Q_{rew} × (1 - R_{com})}{M - N}
$$

Where:

- The total amount of \$A0GI staked in the Staking Contract: $Q_{tsk}$
- The total amount of redeemed \$A0GI: $Q_{red}$
- The amount of staking rewards: $Q_{rew}$
- The commission ratio: $R_{com}$
- The total amount of \$st0G minted: $M$
- The total amount of \$st0G burned: $N$

Since the protocol does not implement a slashing mechanism, the exchange rate can only increase as rewards accumulate. This means that later redeemers may receive a larger amount of \$A0GI upon redemption compared to earlier redeemers.

### **Yield Structure**

The protocol’s yield is determined by three key factors:

- Network Participation Metrics
- Total Protocol Stake
- Market Dynamics

Token holders may monitor their staking performance and the protocol's annual percentage yield (APY) through the integrated dashboard interface.
