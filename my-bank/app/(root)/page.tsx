import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalance from "@/components/TotalBalance";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Sapana" , lastName: "Subedi" , email:"sapanasubedi18@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName}
            subtext="Access and Manage your account and transactions efficiently"
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1200.35}
          />
        </header>
        RECENT transactions
      </div>
      <RightSidebar user={loggedIn as User} transactions={[]} banks={[]}/>
    </section>
  );
};

export default Home;
