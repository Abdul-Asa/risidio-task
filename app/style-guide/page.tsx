import Components from "@/components/components";
import Footer from "@/components/footer";
import Header from "@/components/header";

const ComponentsPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-8 flex-grow px-20 py-8">
        <Header />
        <Components />
      </div>
      <Footer />
    </main>
  );
};

export default ComponentsPage;
