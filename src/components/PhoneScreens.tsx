import { Search, Bell, ChevronRight, AlertTriangle, Package, Pill, BarChart3, Boxes } from "lucide-react";

const screenBase = "w-full h-full bg-card rounded-[2.5rem] overflow-hidden flex flex-col";

export function StockScreen() {
  return (
    <div className={screenBase}>
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-muted-foreground">Good morning</p>
            <h3 className="font-bold text-lg">Stock Overview</h3>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center">
            <Pill className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-secondary/60">
            <p className="text-[10px] text-muted-foreground">Total SKUs</p>
            <p className="font-bold text-xl">12,625</p>
            <p className="text-[10px] text-primary">+4.2%</p>
          </div>
          <div className="p-3 rounded-2xl bg-secondary/60">
            <p className="text-[10px] text-muted-foreground">Low stock</p>
            <p className="font-bold text-xl">141</p>
            <p className="text-[10px] text-destructive">Reorder</p>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-secondary/40">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold">Movement</p>
            <BarChart3 className="w-3 h-3 text-muted-foreground" />
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {[40, 65, 50, 80, 45, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-primary" style={{ height: `${h}%`, opacity: i === 6 ? 1 : 0.6 }} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 pt-2 flex-1">
        <p className="text-xs font-semibold mb-2">Top medicines</p>
        {["Paracetamol 500mg", "Amoxicillin 250mg", "Ibuprofen 200mg"].map((m) => (
          <div key={m} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center">
                <Pill className="w-3 h-3 text-primary" />
              </div>
              <span className="text-xs">{m}</span>
            </div>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function BinsScreen() {
  const bins = [
    { id: "A1", name: "Antibiotics", count: 124, color: "from-blue-400 to-blue-600" },
    { id: "B2", name: "Painkillers", count: 89, color: "from-emerald-400 to-emerald-600" },
    { id: "C3", name: "Vitamins", count: 56, color: "from-amber-400 to-amber-600" },
    { id: "D4", name: "Syrups", count: 42, color: "from-rose-400 to-rose-600" },
    { id: "E5", name: "Topical", count: 31, color: "from-violet-400 to-violet-600" },
    { id: "F6", name: "Cardiac", count: 28, color: "from-cyan-400 to-cyan-600" },
  ];
  return (
    <div className={screenBase}>
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-lg">Bins</h3>
          <Boxes className="w-5 h-5 text-primary" />
        </div>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-secondary/60 mb-5">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Search bins...</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {bins.map((b) => (
            <div key={b.id} className="p-3 rounded-2xl bg-secondary/40">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${b.color} mb-2`} />
              <p className="text-[10px] text-muted-foreground">Bin {b.id}</p>
              <p className="font-semibold text-sm">{b.name}</p>
              <p className="text-[10px] text-primary mt-1">{b.count} items</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AlertsScreen() {
  const alerts = [
    { name: "Amoxicillin 500mg", date: "Expired · 12 Apr", level: "high" },
    { name: "Loratadine 10mg", date: "Expires 03 May", level: "med" },
    { name: "Vitamin D3", date: "Expires 18 May", level: "med" },
    { name: "Cetirizine 5mg", date: "Expires 02 Jun", level: "low" },
    { name: "Omeprazole 20mg", date: "Expires 14 Jun", level: "low" },
  ];
  return (
    <div className={screenBase}>
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-lg">Expiry Alerts</h3>
          <div className="relative">
            <Bell className="w-5 h-5 text-primary" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-destructive" />
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-deep text-primary-foreground mb-4">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-3.5 h-3.5" />
            <p className="text-xs font-semibold">5 items need attention</p>
          </div>
          <p className="text-[10px] opacity-70">Review and restock to avoid losses</p>
        </div>
        <div className="space-y-2">
          {alerts.map((a) => (
            <div key={a.name} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                a.level === "high" ? "bg-destructive/15 text-destructive" :
                a.level === "med" ? "bg-amber-500/15 text-amber-600" :
                "bg-primary/15 text-primary"
              }`}>
                <Package className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate">{a.name}</p>
                <p className="text-[10px] text-muted-foreground">{a.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
