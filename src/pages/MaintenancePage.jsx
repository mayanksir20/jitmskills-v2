const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        🚧 Website Under Maintenance
      </h1>

      <p className="text-gray-600 text-lg text-center max-w-2xl">
        We are currently performing scheduled maintenance.
        Please check back later.
      </p>
    </div>
  );
};

export default MaintenancePage;