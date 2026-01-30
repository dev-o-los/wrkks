export default function StatusBtn({
  status,
  isDraft = false,
}: {
  status: string;
  isDraft?: boolean;
}) {
  return (
    <div className="flex items-center gap-1">
      <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
        <div
          className={`size-1.5 rounded-full relative ${isDraft ? "bg-yellow-300" : "bg-[#009505]"}`}
        >
          <div
            className={`absolute inset-0 rounded-full ${isDraft ? "bg-orange-300" : "bg-[#009505]"} animate-ping opacity-50`}
          ></div>
        </div>
        <p
          className={`text-[10px] font-bold ${isDraft ? "text-yellow-300" : "text-[#009505]"} uppercase`}
        >
          {status}
        </p>
      </button>
    </div>
  );
}
