import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Rojal", lastName: "Poudel" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn as User} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={{
                          $id: "",
                          email: "",
                          userId: "",
                          dwollaCustomerUrl: "",
                          dwollaCustomerId: "",
                          firstName: "",
                          lastName: "",
                          name: "",
                          address1: "",
                          city: "",
                          state: "",
                          postalCode: "",
                          dateOfBirth: "",
                          ssn: ""
                      }}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
