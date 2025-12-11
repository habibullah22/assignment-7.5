import React, { use } from "react";
import Banner from "./Banner";

const TicketContainer = ({ promise }) => {
  const tickets = use(promise);
  console.log(tickets);
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <div className="w-full container mx-auto">
        <section className="w-11/12 mt-10  mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 ">
            <h1 className="text-2xl font-bold">Customer Tickets</h1>
           <div className="mt-5">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {tickets.map((item) => (
      <div
        key={item.ID}
        className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
      >
        {/* Title + Status */}
        <div className="flex justify-between items-start gap-3 flex-wrap">
          <h2 className="text-lg font-semibold text-gray-800">
            {item.Title}
          </h2>

          <span
            className={`
              px-3 py-1 text-sm rounded-full flex items-center gap-2
              ${item.Status === "Open" && "bg-green-100 text-green-700"}
              ${item.Status === "In- Progress" && "bg-yellow-100 text-yellow-700"}
            `}
          >
            <span
              className={`
                w-2 h-2 rounded-full
                ${item.Status === "Open" && "bg-green-600"}
                ${item.Status === "In- Progress" && "bg-yellow-600"}
              `}
            ></span>
            {item.Status}
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-2">{item.Description}</p>

        <div className="flex justify-between items-center mt-4 flex-wrap">
          <div>
            <p className="text-xs text-gray-500">{item.ID}</p>
            <p
              className={`
                text-xs font-semibold
                ${item.Priority === "HIGH PRIORITY" && "text-red-600"}
                ${item.Priority === "MEDIUM PRIORITY" && "text-yellow-600"}
                ${item.Priority === "LOW PRIORITY" && "text-green-600"}
              `}
            >
              {item.Priority}
            </p>
          </div>

          <div className="text-right mt-2 sm:mt-0">
            <p className="text-sm font-medium text-gray-700">{item.Assignee}</p>
            <p className="text-xs text-gray-500">{item.Date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

          </div>
          <div className="lg:col-span-4 border">
            <h1 className="text-2xl font-bold">Task Status</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketContainer;
