interface StatCardProps {
    label: string;
    value: number;
    color?: 'blue' | 'green' | 'red' | 'pink'
}

export const StatCard = ({ label, value, color = 'blue' }: StatCardProps) => {
    return(
        <div className={`p-4 rounded-xl border border-white/10 glass`}>
            <p className="text-xs text-slate-500 uppercase tracking-widest">{label}</p>
            <h3 className={`text-2xl font-black text-${color}-400`}>{value}</h3>
        </div>
    );
}