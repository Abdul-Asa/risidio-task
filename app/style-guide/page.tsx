import Components from "@/app/style-guide/components";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

const ComponentsPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-8 flex-grow lg:px-20 px-4 py-8">
        <Header />
        <Components />
      </div>
      <Footer />
    </main>
  );
};

export default ComponentsPage;
