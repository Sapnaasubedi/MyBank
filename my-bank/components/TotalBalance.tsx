import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const TotalBalance = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <div>
      <section className="total-balance">
        <div className="total-balance-chart">
          <DoughnutChart accounts={accounts} />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
          <div className="flex flex-col gap-6">
            <p className="total-balance-label">Total Current Balance</p>
            <div className="total-balance-amount">
              <AnimatedCounter amount={totalCurrentBalance} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TotalBalance;
