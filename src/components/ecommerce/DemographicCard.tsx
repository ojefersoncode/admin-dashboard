"use client";

import CountryMap from "./CountryMap";

export default function DemographicCard() {
  return (
    <div className="w-full p-4">
      <div className="w-full flex-1 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Customers Demographic
            </h3>
            <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
              Number of customer based on country
            </p>
          </div>

          <div className="relative inline-block">pppp</div>
        </div>
        <div className="px-4 py-6 my-6 overflow-hidden border border-gary-200 rounded-2xl bg-gray-50 dark:border-gray-800 dark:bg-gray-900 sm:px-6">
          <div
            id="mapOne"
            className="flex w-full justify-center mapOne map-btn h-[280px] sm:-mx-6 "
          >
            <CountryMap />
          </div>
        </div>
      </div>
    </div>
  );
}
