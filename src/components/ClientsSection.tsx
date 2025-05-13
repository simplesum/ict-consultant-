
const ClientLogo = ({ name }: { name: string }) => {
  return (
    <div className="bg-white p-6 flex items-center justify-center rounded-md shadow-sm hover:shadow-md transition-shadow">
      <div className="text-2xl font-bold text-gray-300">{name}</div>
    </div>
  );
};

const ClientsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg uppercase tracking-wider text-gray-500 mb-10">Brands that trust us</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          <ClientLogo name="T" />
          <ClientLogo name="S" />
          <ClientLogo name="Ford" />
          <ClientLogo name="T.F." />
          <ClientLogo name="I" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
