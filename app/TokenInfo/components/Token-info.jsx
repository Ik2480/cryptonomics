"use client";

const THEME = {
  buttonSecondary:
    "px-3 py-1 rounded-lg border border-[#8CD9F2] text-[#8CD9F2] hover:bg-[#23272A] hover:text-[#F5F5F5] transition-colors",
};

export default function TokenInfo() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] to-[#00FFAA]">
        $BOOZ Token Info
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://gateway.irys.xyz/GsohqHXm1XcEX4NUZd4xsr8NofGzuH6dEAaeswVvg5mD"
          alt="BOOZ Logo"
          className="w-40 h-40 rounded-xl shadow-lg mx-auto"
        />
        <div>
          <p className="mb-4 text-gray-300">
            POWERS AI rewards for blockchain education, dominoes, chess gaming,
            content creator token deployment, and small business payment
            integration on Solana.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>
              <b>Name:</b> BLOCKCHAIN OF OZ
            </li>
            <li>
              <b>Symbol:</b> BOOZ
            </li>
            <li>
              <b>Decimals:</b> 9
            </li>
            <li>
              <b>Supply:</b> 1,250,000
            </li>
            <li>
              <b>Contract:</b>{" "}
              <a
                href="https://explorer.solana.com/address/6dJtPizh6meSDXUu7tFQU5RB3j45e4T28yBMGevswave?cluster=mainnet-beta"
                target="_blank"
                className="text-[#66B2FF] underline"
              >
                6dJtPizh6meSDXUu7tFQU5RB3j45e4T28yBMGevswave
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://x.com/doml28ecosystem?s=21" target="_blank">
              <button className={THEME.buttonSecondary}>Twitter</button>
            </a>
            <a href="https://t.me/cryptonomics1O1" target="_blank">
              <button className={THEME.buttonSecondary}>Telegram</button>
            </a>
            <a href="https://cryptonomics101.net/" target="_blank">
              <button className={THEME.buttonSecondary}>Website</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
