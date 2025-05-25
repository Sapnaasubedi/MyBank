import React from 'react'

const TotalBalance = ({ totalBanks,totalCurrentBalance}:TotalBalanceBoxProps ) => {
  return (
    <div>
      <section className="total-balance">
        <div className="total-balance-chart">

        </div>
        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-6">
                <p className="total-balance-label">Total Current Balance</p>
                <p className="total-balance-amount">{totalCurrentBalance}</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default TotalBalance
