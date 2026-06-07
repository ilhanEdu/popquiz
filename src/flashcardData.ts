import { Flashcard } from './types';

// FluentUI 3D emojis (same source the Quiz uses) keep the hero art perfectly
// on-brand and reliable.
const EMOJI_BASE = 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets';

const emoji = (path: string) => `${EMOJI_BASE}/${path}`;

export const FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    category: "PerpDEX Basics",
    term: "Perpetual Contract",
    definition: "A derivative with no expiry date. You stay long or short for as long as you want, with no settlement deadline forcing you out.",
    emojiUrl: emoji('Coin/3D/coin_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #1A1628 100%)'
  },
  {
    id: 2,
    category: "PerpDEX Basics",
    term: "Funding Rate",
    definition: "A periodic payment between longs and shorts. It keeps the perpetual price anchored to the spot market. If longs dominate, they pay shorts.",
    emojiUrl: emoji('Shield/3D/shield_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1E2A 0%, #241019 100%)'
  },
  {
    id: 3,
    category: "PerpDEX Basics",
    term: "Mark Price",
    definition: "A fair-value price calculated from index data, not the last trade. Used to trigger liquidations so a single bad tick cannot wipe you out.",
    emojiUrl: emoji('High%20voltage/3D/high_voltage_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A3018 0%, #241D0E 100%)'
  },
  {
    id: 4,
    category: "PerpDEX Basics",
    term: "Open Interest",
    definition: "The total dollar value of all active, unclosed positions in a market. Rising OI means new money is entering. Falling OI means traders are exiting.",
    emojiUrl: emoji('Fire/3D/fire_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1749&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1A1A 0%, #240F0F 100%)'
  },
  {
    id: 5,
    category: "PerpDEX Basics",
    term: "Leverage",
    definition: "Multiplying your position size beyond your deposit. At 10x leverage, a 1% price move equals a 10% gain or loss on your collateral.",
    emojiUrl: emoji('Money%20with%20wings/3D/money_with_wings_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620266757065-5814239881fd?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3A2E 0%, #0F241B 100%)'
  },
  {
    id: 6,
    category: "PerpDEX Basics",
    term: "Liquidation",
    definition: "Forced closure of your position when losses eat your margin below the required threshold. The protocol closes the trade to protect itself.",
    emojiUrl: emoji('Droplet/3D/droplet_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3140 0%, #0F1B24 100%)'
  },
  {
    id: 7,
    category: "PerpDEX Basics",
    term: "Long",
    definition: "A trade that profits when price goes up. You buy the contract expecting the market to rise.",
    emojiUrl: emoji('Telescope/3D/telescope_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #161228 100%)'
  },
  {
    id: 8,
    category: "PerpDEX Basics",
    term: "Short",
    definition: "A trade that profits when price falls. You sell the contract expecting the market to drop.",
    emojiUrl: emoji('Globe%20with%20meridians/3D/globe_with_meridians_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1769&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E2A40 0%, #0F1624 100%)'
  },
  {
    id: 9,
    category: "PerpDEX Basics",
    term: "Unrealized PnL",
    definition: "Your profit or loss on an open position. It is on paper only. It becomes real the moment you close the trade.",
    emojiUrl: emoji('Gem%20stone/3D/gem_stone_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A2418 0%, #24160E 100%)'
  },
  {
    id: 10,
    category: "PerpDEX Basics",
    term: "Realized PnL",
    definition: "The actual gain or loss after you close a position. This is what hits your wallet and your trading record.",
    emojiUrl: emoji('Brain/3D/brain_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #1A1628 100%)'
  },
  {
    id: 11,
    category: "Margin System",
    term: "Margin",
    definition: "The collateral you deposit to open a leveraged position. Think of it as a security deposit the protocol holds while you trade.",
    emojiUrl: emoji('Chart%20increasing/3D/chart_increasing_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1E2A 0%, #241019 100%)'
  },
  {
    id: 12,
    category: "Margin System",
    term: "Initial Margin",
    definition: "The minimum collateral required to open a position. It is a percentage of the total position size, set by the protocol.",
    emojiUrl: emoji('Bank/3D/bank_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A3018 0%, #241D0E 100%)'
  },
  {
    id: 13,
    category: "Margin System",
    term: "Maintenance Margin",
    definition: "The minimum collateral needed to keep your position alive. Drop below this level and the liquidation engine kicks in.",
    emojiUrl: emoji('Key/3D/key_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1A1A 0%, #240F0F 100%)'
  },
  {
    id: 14,
    category: "Margin System",
    term: "Cross Margin",
    definition: "Your entire account balance backs all open positions. A winning trade can rescue a losing one, but a big loss can drain your whole account.",
    emojiUrl: emoji('Lock/3D/lock_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3A2E 0%, #0F241B 100%)'
  },
  {
    id: 15,
    category: "Margin System",
    term: "Isolated Margin",
    definition: "Each position gets its own dedicated collateral. Your maximum loss on that trade is capped at what you put in, protecting the rest of your account.",
    emojiUrl: emoji('Rocket/3D/rocket_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1749&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3140 0%, #0F1B24 100%)'
  },
  {
    id: 16,
    category: "Margin System",
    term: "Insurance Fund",
    definition: "A protocol reserve that absorbs losses when a liquidation does not fully recover the debt. It keeps the platform solvent and protects other traders.",
    emojiUrl: emoji('Light%20bulb/3D/light_bulb_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620266757065-5814239881fd?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #161228 100%)'
  },
  {
    id: 17,
    category: "Order Book / CLOB",
    term: "CLOB",
    definition: "Central Limit Order Book. A system that matches buy and sell orders in real time by price and time priority. This is what most top CEXs run on.",
    emojiUrl: emoji('Books/3D/books_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E2A40 0%, #0F1624 100%)'
  },
  {
    id: 18,
    category: "Order Book / CLOB",
    term: "Bid",
    definition: "The highest price a buyer is currently willing to pay for an asset in the order book.",
    emojiUrl: emoji('Magnifying%20glass%20tilted%20right/3D/magnifying_glass_tilted_right_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A2418 0%, #24160E 100%)'
  },
  {
    id: 19,
    category: "Order Book / CLOB",
    term: "Ask",
    definition: "The lowest price a seller is currently willing to accept. Also called the offer. The bid and ask together define the spread.",
    emojiUrl: emoji('Memo/3D/memo_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1769&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #1A1628 100%)'
  },
  {
    id: 20,
    category: "Order Book / CLOB",
    term: "Spread",
    definition: "The gap between the best bid and the best ask. Tighter spreads mean better liquidity and a lower cost to trade.",
    emojiUrl: emoji('Hourglass%20done/3D/hourglass_done_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1E2A 0%, #241019 100%)'
  },
  {
    id: 21,
    category: "Order Book / CLOB",
    term: "Market Order",
    definition: "An order that executes immediately at the best available price. Fast, but you accept whatever price the book offers you.",
    emojiUrl: emoji('Coin/3D/coin_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A3018 0%, #241D0E 100%)'
  },
  {
    id: 22,
    category: "Order Book / CLOB",
    term: "Limit Order",
    definition: "An order that only fills at your specified price or better. You control the price, but not the timing of execution.",
    emojiUrl: emoji('Shield/3D/shield_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1A1A 0%, #240F0F 100%)'
  },
  {
    id: 23,
    category: "Order Book / CLOB",
    term: "Price Discovery",
    definition: "The process through which a market finds the fair price for an asset by matching real supply and demand from participants.",
    emojiUrl: emoji('High%20voltage/3D/high_voltage_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3A2E 0%, #0F241B 100%)'
  },
  {
    id: 24,
    category: "Order Book / CLOB",
    term: "Order Depth",
    definition: "The volume of resting buy and sell orders at each price level. A deep book absorbs large trades with less slippage.",
    emojiUrl: emoji('Fire/3D/fire_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3140 0%, #0F1B24 100%)'
  },
  {
    id: 25,
    category: "Trading Mechanics",
    term: "Slippage",
    definition: "The difference between the price you expected and the price you actually got. Happens when there is not enough liquidity at your target level.",
    emojiUrl: emoji('Money%20with%20wings/3D/money_with_wings_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #161228 100%)'
  },
  {
    id: 26,
    category: "Trading Mechanics",
    term: "Maker",
    definition: "A trader who places a limit order that sits on the book and adds liquidity. Usually earns rebates or pays lower fees as a reward.",
    emojiUrl: emoji('Droplet/3D/droplet_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1749&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E2A40 0%, #0F1624 100%)'
  },
  {
    id: 27,
    category: "Trading Mechanics",
    term: "Taker",
    definition: "A trader who places a market order and removes liquidity from the book. Typically pays higher fees for the privilege of instant execution.",
    emojiUrl: emoji('Telescope/3D/telescope_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620266757065-5814239881fd?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A2418 0%, #24160E 100%)'
  },
  {
    id: 28,
    category: "Trading Mechanics",
    term: "Stop Loss (SL)",
    definition: "An order that closes your position automatically if price hits a certain level. It limits how much you can lose on a trade while you are not watching.",
    emojiUrl: emoji('Globe%20with%20meridians/3D/globe_with_meridians_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #1A1628 100%)'
  },
  {
    id: 29,
    category: "Trading Mechanics",
    term: "Take Profit (TP)",
    definition: "An order that automatically closes your position once it hits your profit target. Locks in gains without requiring you to stare at charts all day.",
    emojiUrl: emoji('Gem%20stone/3D/gem_stone_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1E2A 0%, #241019 100%)'
  },
  {
    id: 30,
    category: "Trading Mechanics",
    term: "Liquidation Price",
    definition: "The exact price level at which your position gets force-closed. Calculate this before you enter any trade. It is your hard floor.",
    emojiUrl: emoji('Brain/3D/brain_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1769&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A3018 0%, #241D0E 100%)'
  },
  {
    id: 31,
    category: "AMM & Liquidity",
    term: "AMM",
    definition: "Automated Market Maker. A protocol that prices assets using a math formula instead of an order book. The classic formula: x times y = k.",
    emojiUrl: emoji('Chart%20increasing/3D/chart_increasing_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1A1A 0%, #240F0F 100%)'
  },
  {
    id: 32,
    category: "AMM & Liquidity",
    term: "Liquidity Pool",
    definition: "A pool of tokens locked in a smart contract that enables trading on AMMs. LPs deposit here and earn a share of trading fees in return.",
    emojiUrl: emoji('Bank/3D/bank_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3A2E 0%, #0F241B 100%)'
  },
  {
    id: 33,
    category: "AMM & Liquidity",
    term: "LP (Liquidity Provider)",
    definition: "Someone who deposits assets into a pool or market-making system to earn fees. LPs are the backbone of any liquid trading venue.",
    emojiUrl: emoji('Key/3D/key_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3140 0%, #0F1B24 100%)'
  },
  {
    id: 34,
    category: "AMM & Liquidity",
    term: "vAMM",
    definition: "Virtual AMM. An AMM used purely for price discovery in perpetual protocols. No real tokens are deposited. It only handles the math.",
    emojiUrl: emoji('Lock/3D/lock_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #161228 100%)'
  },
  {
    id: 35,
    category: "AMM & Liquidity",
    term: "Impermanent Loss",
    definition: "A loss LPs face when the price ratio of their deposited tokens shifts from when they entered. It is unrealized until you withdraw.",
    emojiUrl: emoji('Rocket/3D/rocket_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E2A40 0%, #0F1624 100%)'
  },
  {
    id: 36,
    category: "PopDEX Specific",
    term: "Trade-First Philosophy",
    definition: "PopDEX's core design principle. Value returns to the people who create real market activity: traders, LPs, and contributors. Not passive holders.",
    emojiUrl: emoji('Light%20bulb/3D/light_bulb_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A2418 0%, #24160E 100%)'
  },
  {
    id: 37,
    category: "PopDEX Specific",
    term: "200ms Block Time",
    definition: "How fast PopDEX's Layer 1 confirms each block. Fast enough to match the execution feel of a centralized exchange without sacrificing transparency.",
    emojiUrl: emoji('Books/3D/books_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1749&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #1A1628 100%)'
  },
  {
    id: 38,
    category: "PopDEX Specific",
    term: "100,000 TPS",
    definition: "PopDEX's target transaction throughput. Designed to handle high-frequency trading at scale without the congestion that slows most blockchains.",
    emojiUrl: emoji('Magnifying%20glass%20tilted%20right/3D/magnifying_glass_tilted_right_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620266757065-5814239881fd?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1E2A 0%, #241019 100%)'
  },
  {
    id: 39,
    category: "PopDEX Specific",
    term: "RWA Perpetuals",
    definition: "Perpetual contracts on Real World Assets like gold, oil, or government bonds. Brings traditional finance exposure into an onchain trading venue.",
    emojiUrl: emoji('Memo/3D/memo_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A3018 0%, #241D0E 100%)'
  },
  {
    id: 40,
    category: "PopDEX Specific",
    term: "Capital Efficiency",
    definition: "Getting the maximum trading exposure from the minimum collateral. Better efficiency means less of your money sitting idle doing nothing.",
    emojiUrl: emoji('Hourglass%20done/3D/hourglass_done_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1A1A 0%, #240F0F 100%)'
  },
  {
    id: 41,
    category: "PopDEX Specific",
    term: "On-Chain CLOB",
    definition: "An order book that runs entirely on a blockchain. Every order, match, and fill is transparent and verifiable by anyone, at any time.",
    emojiUrl: emoji('Coin/3D/coin_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1769&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3A2E 0%, #0F241B 100%)'
  },
  {
    id: 42,
    category: "PopDEX Specific",
    term: "Deep Liquidity Network",
    definition: "PopDEX's combination of strategic market-maker partnerships and incentive programs to keep spreads tight and order books full across all markets.",
    emojiUrl: emoji('Shield/3D/shield_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3140 0%, #0F1B24 100%)'
  },
  {
    id: 43,
    category: "PopDEX Specific",
    term: "Value Return Model",
    definition: "PopDEX's approach to distributing protocol revenue back to those who helped create it. If you contribute value, you capture value.",
    emojiUrl: emoji('High%20voltage/3D/high_voltage_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #161228 100%)'
  },
  {
    id: 44,
    category: "Blockchain & DeFi",
    term: "Layer 1 (L1)",
    definition: "The base blockchain that processes and settles all transactions. PopDEX runs on its own purpose-built L1, optimized specifically for trading.",
    emojiUrl: emoji('Fire/3D/fire_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E2A40 0%, #0F1624 100%)'
  },
  {
    id: 45,
    category: "Blockchain & DeFi",
    term: "TPS (Transactions Per Second)",
    definition: "How many transactions a network can process each second. Higher TPS means faster execution and a better experience for active traders.",
    emojiUrl: emoji('Money%20with%20wings/3D/money_with_wings_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A2418 0%, #24160E 100%)'
  },
  {
    id: 46,
    category: "Blockchain & DeFi",
    term: "Smart Contract",
    definition: "Self-executing code on a blockchain. It enforces the protocol's rules automatically. No middleman, no discretion, no downtime.",
    emojiUrl: emoji('Droplet/3D/droplet_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #2A2440 0%, #1A1628 100%)'
  },
  {
    id: 47,
    category: "Blockchain & DeFi",
    term: "Self-Custody",
    definition: "Holding your own private keys and controlling your own assets. No exchange can freeze, lose, or run off with your funds.",
    emojiUrl: emoji('Telescope/3D/telescope_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1E2A 0%, #241019 100%)'
  },
  {
    id: 48,
    category: "Blockchain & DeFi",
    term: "On-Chain",
    definition: "Any transaction, order, or piece of data that is recorded and verifiable directly on a public blockchain. Nothing is hidden or off the books.",
    emojiUrl: emoji('Globe%20with%20meridians/3D/globe_with_meridians_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1749&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A3018 0%, #241D0E 100%)'
  },
  {
    id: 49,
    category: "Blockchain & DeFi",
    term: "DEX vs CEX",
    definition: "A CEX holds your funds and controls your account. A DEX lets you trade directly from your wallet. One requires trust. The other requires code.",
    emojiUrl: emoji('Gem%20stone/3D/gem_stone_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1620266757065-5814239881fd?q=80&w=1740&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #3A1A1A 0%, #240F0F 100%)'
  },
  {
    id: 50,
    category: "Pop Quiz",
    term: "Pop Quiz",
    definition: "PopDEX's community education app. A flashcard-driven tool that turns learning about onchain trading into something actually worth doing.",
    emojiUrl: emoji('Brain/3D/brain_3d.png'),
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop',
    gradient: 'linear-gradient(145deg, #1E3A2E 0%, #0F241B 100%)'
  }
];
