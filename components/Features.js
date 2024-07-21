const Features = () => {
    return (
      <section id="features" className="py-12 bg-green-500 text-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center">Features</h3>
          <div className="flex flex-wrap justify-center mt-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white text-black shadow rounded">
                <h4 className="text-2xl font-bold">Feature 1</h4>
                <p className="mt-2">Description of Feature 1.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white text-black shadow rounded">
                <h4 className="text-2xl font-bold">Feature 2</h4>
                <p className="mt-2">Description of Feature 2.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="p-6 bg-white text-black shadow rounded">
                <h4 className="text-2xl font-bold">Feature 3</h4>
                <p className="mt-2">Description of Feature 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  