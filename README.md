# CoopCast

**CoopCast** is a Social-Fi credit cooperative built on Farcaster. Members pay a small join fee and monthly contributions to earn on-chain shares, access micro-loans, and participate in decentralized governance—all powered by smart contracts and surfaced through Farcaster Frames.

## 🚀 Features

- **Membership NFT (CastPass)**  
  Mintable ERC-721 token for $1/year—grants voting rights and access to the coop’s services.

- **Share Token (CAST)**  
  Soul-bound ERC-20 minted at 1 CAST per $1 contributed, rebasing with yield and interest rewards.

- **Automated Contributions**  
  $5 USDC/month mandatory deposit into the Vault; extra deposits optional.

- **Micro-Loans with Guarantors**  
  Borrow up to 3× your contributions (plus guarantor backing). Requires two on-chain EIP-712 attestations.

- **Fee & Yield Splitting**  
  Join fees, loan interest, and strategy yield automatically route to Reserve Fund, Dev Pool, Risk Buffer, and DAO Treasury per governance parameters.

- **Decentralized Governance**  
  CAST = 1 vote. Propose and vote on rate changes, yield strategies, and treasury allocations.

## 🔧 Installation & Quickstart

1. **Clone & install**  
   ```bash
   git clone https://github.com/your-org/coopcast-foundry.git
   cd coopcast-foundry
   npm install  # for scripts & tooling
   
