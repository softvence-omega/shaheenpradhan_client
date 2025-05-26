const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-screen w-full flex-1 flex-col gap-2  border border-neutral-200 bg-pink-300/10 p-2 md:p-10 dark:border-neutral-700 ">
        <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-2" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-gray-100"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-2" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-gray-100"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
