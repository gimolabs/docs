---
sidebar_position: 1
---

# Security

The first audit was conducted by https://anatomi.st/, and the audit report can be found here: https://drive.google.com/file/d/1SJawR9yJ-W1G8wW7Tt1PQ0F8jKzlsoa6/view?usp=sharing


Gimo Finance is designed to deliver a secure, reliable, and user-centric liquid staking solution for Proof-of-Stake (PoS) networks on [0G](http://0g.ai/). Our security philosophy addresses the inherent tension between mainnet security and token liquidity, ensuring the safety of staked assets, the stability of our LST, and the integrity of integrated PoS ecosystems. We aim to provide a resilient platform that fosters user trust and ecosystem growth by leveraging modular architecture, decentralised governance, and robust economic incentives.

# **Security Framework**

## **Protocol Layer**

The protocol layer establishes the foundation for secure operations across staking, LST minting, and cross-chain interactions.

- **Modular Architecture**: Core functionalities—such as staking, LST issuance, and reward distribution—are isolated into independent modules. This design minimises systemic risks by ensuring that a failure in one module does not compromise the entire system.
- **Anti-Sybil Measures**: Validators and governance participants are required to stake native protocol tokens, significantly increasing the economic cost of malicious attacks and deterring Sybil behaviour.

## **Smart Contract Layer**

Smart contracts are the backbone of the protocol, handling staking logic, LST minting, and reward distribution.

- **Code Transparency**: All smart contracts are open-source and hosted on GitHub, accompanied by detailed documentation to facilitate community review and ensure no hidden vulnerabilities.
- **Controlled Upgradability**: Contracts use a proxy pattern for upgradability, with upgrades strictly governed by a decentralized DAO to prevent unauthorized changes.
- **Parameter Safety**: Key parameters (e.g., minimum stake amounts, redemption delays) are constrained within safe ranges to prevent abuse, with adjustments subject to governance approval.

## **Node Layer**

Validators are critical to executing staking operations and securing PoS networks. Our node layer prioritises decentralisation and resilience.

- **Validator Diversity**: The protocol employs a distributed network of Standard Validators (SVs) to eliminate single points of failure and reduce the risk of validator collusion or downtime.
- **Node Monitoring**: A real-time monitoring system tracks validator performance metrics (e.g., uptime, block proposal success rate), enabling rapid detection and response to anomalies.

## **Governance Layer**

Decentralized governance ensures community-driven decision-making while safeguarding against malicious control.

- **Decentralized DAO**: Protocol parameters, upgrades, and validator policies are managed by a DAO, with voting power allocated to native token holders. A minimum participation threshold and a 7-day voting period prevent rushed or malicious proposals.
- **Transparent Decision-Making**: All governance proposals are publicly accessible on the protocol’s proposal platform, inviting community scrutiny and feedback.
- **Incentive Alignment**: Long-term token holders are rewarded for active governance participation, aligning economic incentives with protocol security.
- **Multi-Signature Safeguards**: Governance-controlled funds and critical operations require multi-signature approvals to prevent single-party control.

# **Conclusion**

Gimo Finance is built on a multi-layered security framework inspired by [StaFi](https://www.stafi.io/)’s expertise in multi-chain liquid staking. By combining modular design, decentralized governance, robust economic incentives, and proactive risk mitigation, we deliver a secure and scalable solution on [0G](http://0g.ai) that protects user assets while advancing the PoS ecosystem. Our commitment to transparency, community engagement, and continuous improvement ensures long-term trust and reliability.