import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  Boxes,
  Truck,
  ArrowRight,
  Navigation,
} from 'lucide-react';
import { INVENTORY_ALERTS, VEHICLE_ALLOCATIONS } from '../../data/mockData';

export const InventoryAndVehicles: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
      {/* Section E: Stock & Inventory Alerts (Col 6) */}
      <div className="lg:col-span-6">
        <Card
          title="Stock & Inventory Alerts"
          subtitle="Buffer alerts & expiration warnings across cold chain"
          icon={<Boxes size={18} />}
          badge={
            <Badge variant="warning" size="sm">
              {INVENTORY_ALERTS.length} Action Items
            </Badge>
          }
          headerAction={
            <button className="text-xs font-semibold text-[#0E7D7A] hover:text-[#14B8A6] flex items-center gap-1 transition-colors">
              <span>View Inventory</span>
              <ArrowRight size={13} />
            </button>
          }
          noPadding
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-[#F8FAFC]/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-2.5 px-4">Item & Storage</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Available</th>
                  <th className="py-2.5 px-4 text-right">Alert Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {INVENTORY_ALERTS.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#F0FDFA]/40 transition-colors group cursor-pointer"
                  >
                    <td className="py-3 px-4">
                      <p className="font-semibold text-slate-800 group-hover:text-[#0E7D7A] transition-colors leading-snug">
                        {row.item}
                      </p>
                      <p className="text-[10.5px] text-slate-400 mt-0.5">
                        {row.location}
                      </p>
                    </td>

                    <td className="py-3 px-3">
                      <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium text-[11px]">
                        {row.category}
                      </span>
                    </td>

                    <td className="py-3 px-3 font-semibold text-slate-800">
                      {row.availableStock}
                    </td>

                    <td className="py-3 px-4 text-right">
                      {row.alertType === 'Low Stock' ? (
                        <Badge variant="danger" dot size="sm">
                          Low Stock
                        </Badge>
                      ) : (
                        <Badge variant="warning" dot size="sm">
                          Near Expiry
                        </Badge>
                      )}
                      {row.expiryDate && (
                        <span className="block text-[10px] text-slate-400 mt-0.5">
                          Exp: {row.expiryDate}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="text-[11px]">
              Cold chain monitored 24/7 (2°C to 8°C optimal range)
            </span>
            <span className="font-semibold text-[#0E7D7A]">
              Next indent schedule: 05 Nov 2026
            </span>
          </div>
        </Card>
      </div>

      {/* Section F: Vehicle Operations (Col 6) */}
      <div className="lg:col-span-6">
        <Card
          title="Vehicle Management"
          subtitle="Field mobility & logistics monitoring"
          icon={<Truck size={18} />}
          badge={
            <Badge variant="teal" size="sm">
              4 Active Today
            </Badge>
          }
          headerAction={
            <button className="text-xs font-semibold text-[#0E7D7A] hover:text-[#14B8A6] flex items-center gap-1 transition-colors">
              <span>Fleet Register</span>
              <ArrowRight size={13} />
            </button>
          }
        >
          {/* Top 4 KPI mini cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
            <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-100 text-center">
              <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wide">
                Allocated
              </span>
              <p className="text-lg font-black text-[#0E7D7A] mt-0.5">4</p>
              <span className="text-[10px] text-teal-600">On duty today</span>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">
                Available
              </span>
              <p className="text-lg font-black text-emerald-700 mt-0.5">2</p>
              <span className="text-[10px] text-emerald-600">Standby at HQ</span>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-100 text-center">
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wide">
                Insurance
              </span>
              <p className="text-lg font-black text-amber-700 mt-0.5">1</p>
              <span className="text-[10px] text-amber-600">Due in 12 days</span>
            </div>

            <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-center">
              <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wide">
                Maintenance
              </span>
              <p className="text-lg font-black text-blue-700 mt-0.5">1</p>
              <span className="text-[10px] text-blue-600">Service 15 Nov</span>
            </div>
          </div>

          {/* Today's Vehicle Allocations List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Today's Vehicle Allocations
              </span>
              <span className="text-[11px] text-slate-400">
                Live Field Dispatch
              </span>
            </div>

            <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
              {VEHICLE_ALLOCATIONS.map((veh) => (
                <div
                  key={veh.id}
                  className="p-2.5 rounded-lg border border-slate-200/80 hover:border-teal-300 bg-slate-50/60 hover:bg-[#F0FDFA]/40 transition-colors flex items-center justify-between gap-3 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 font-mono text-xs">
                        {veh.vehicleNo}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        ({veh.model})
                      </span>
                      {veh.status === 'In Transit' ? (
                        <Badge variant="teal" dot size="sm">
                          In Transit
                        </Badge>
                      ) : veh.status === 'Allocated' ? (
                        <Badge variant="info" size="sm">
                          Scheduled
                        </Badge>
                      ) : (
                        <Badge variant="success" size="sm">
                          Standby
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-slate-500 text-[11px]">
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <Navigation size={11} className="text-[#0E7D7A]" />
                        {veh.destination}
                      </span>
                      <span>•</span>
                      <span>Driver: {veh.driver}</span>
                    </div>

                    <p className="text-[10px] text-slate-400 mt-0.5 truncate">
                      Purpose: {veh.purpose}
                    </p>
                  </div>

                  <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                    {veh.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
