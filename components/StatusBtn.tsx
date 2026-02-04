export default function StatusBtn({ islive }: { islive: boolean }) {
  return (
    <div className="flex items-center gap-1">
      <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
        <div
          className={`size-1.5 rounded-full relative ${islive ? "bg-[#009505]" : "bg-yellow-300"}`}
        >
          <div
            className={`absolute inset-0 rounded-full ${islive ? "bg-[#009505]" : "bg-orange-300"} animate-ping opacity-50`}
          ></div>
        </div>
        <p
          className={`text-[10px] font-bold ${islive ? "text-[#009505]" : "text-yellow-300"} uppercase`}
        >
          {islive ? "live" : "draft"}
        </p>
      </button>
    </div>
  );
}
