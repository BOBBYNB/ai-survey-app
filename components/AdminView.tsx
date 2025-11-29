import React, { useState, useEffect } from 'react';
import { ArrowLeft, Lock, Trash2, Database, AlertCircle, FileJson, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { SurveyData } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { supabase } from '../supabaseClient';

interface AdminViewProps {
  onBack: () => void;
}

const COLORS = ['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b'];

const AdminView: React.FC<AdminViewProps> = ({ onBack }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState<SurveyData[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: supabaseData, error } = await supabase
        .from('survey_responses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching data:', error);
        alert('Database connection failed');
      } else {
        const formattedData: SurveyData[] = (supabaseData || []).map(item => ({
          id: item.id,
          timestamp: new Date(item.created_at).getTime(),
          path: item.path,
          answers: item.answers
        }));
        setData(formattedData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Bobby501029') { 
      setIsAuthenticated(true);
    } else {
      alert('Access Denied');
    }
  };

  const handleClearDatabase = async () => {
    if (window.confirm('WARNING: This action will permanently DELETE ALL records from the database. Are you sure?')) {
      setLoading(true);
      try {
        const { error } = await supabase
          .from('survey_responses')
          .delete()
          .gt('id', '00000000-0000-0000-0000-000000000000'); 

        if (error) {
          console.error('Error deleting:', error);
          alert('Failed to delete data');
        } else {
          setData([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleExpand = (id: string) => {
    const newSet = new Set(expandedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedIds(newSet);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="flex justify-center mb-6 relative z-10">
            <div className="p-4 bg-cyan-900/20 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
               <Lock className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-center text-white mb-6 font-mono tracking-widest">SYSTEM_ACCESS</h2>
          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Key"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none font-mono text-center tracking-widest transition-colors focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
            />
            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 font-mono">
              LOGIN
            </button>
          </form>
          <button onClick={onBack} className="w-full mt-6 text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono flex items-center justify-center gap-2">
            <ArrowLeft size={12} /> Return Home
          </button>
        </div>
      </div>
    );
  }

  // Process Data for Charts
  const pathStats = [
    { name: 'Middle/High', value: data.filter(d => d.path === 'middle_school').length },
    { name: 'University', value: data.filter(d => d.path === 'university').length },
  ];

  const freqStats = [
    { name: 'Daily', value: data.filter(d => d.answers['q2_freq'] === 'daily').length },
    { name: 'Weekly', value: data.filter(d => d.answers['q2_freq'] === 'weekly').length },
    { name: 'Rarely', value: data.filter(d => d.answers['q2_freq'] === 'rarely').length },
  ];

  const styleStats = [
    { name: 'Proxy', value: data.filter(d => d.answers['q4_essay'] === 'proxy').length },
    { name: 'Collage', value: data.filter(d => d.answers['q4_essay'] === 'collage').length },
    { name: 'Mentor', value: data.filter(d => d.answers['q4_essay'] === 'mentor').length },
    { name: 'Trad', value: data.filter(d => d.answers['q4_essay'] === 'trad').length },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 font-mono">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 max-w-6xl mx-auto gap-4">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400 tracking-tight flex items-center gap-2">
            <Database size={24} />
            Data Visualization
          </h1>
          <p className="text-xs text-slate-500 mt-1">Source: SUPABASE</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={fetchData} 
            className="flex items-center gap-2 px-4 py-2 rounded border border-slate-700 bg-slate-900 hover:bg-slate-800 hover:text-cyan-400 transition-colors text-xs"
          >
             <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
          <button 
            onClick={handleClearDatabase} 
            className="flex items-center gap-2 px-4 py-2 rounded border border-red-900/50 bg-red-950/20 text-red-400 hover:bg-red-900/40 hover:text-red-300 transition-colors text-xs"
          >
            <Trash2 size={14} /> Delete All
          </button>
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-500 text-black font-bold transition-colors text-xs shadow-[0_0_10px_rgba(34,211,238,0.2)]"
          >
            <ArrowLeft size={14} /> Exit
          </button>
        </div>
      </header>

      {loading && data.length === 0 ? (
         <div className="max-w-6xl mx-auto min-h-[400px] flex items-center justify-center">
            <div className="text-cyan-400 animate-pulse flex items-center gap-2">
              <RefreshCw className="animate-spin" /> Loading...
            </div>
         </div>
      ) : data.length === 0 ? (
        <div className="max-w-6xl mx-auto min-h-[400px] flex flex-col items-center justify-center border border-slate-800 border-dashed rounded-xl bg-slate-900/30">
          <AlertCircle className="w-12 h-12 text-slate-600 mb-4" />
          <h3 className="text-xl text-slate-400 mb-2">Database Empty</h3>
          <p className="text-slate-600 text-sm">No survey responses found.</p>
        </div>
      ) : (
        <>
          <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Total Responses */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database size={64} />
              </div>
              <h3 className="text-slate-400 text-xs tracking-widest mb-2">TOTAL RESPONSES</h3>
              <p className="text-5xl font-bold text-white tracking-tighter">{data.length}</p>
              <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-cyan-500 w-full animate-pulse"></div>
              </div>
            </div>

            {/* Card 2: Path Distribution */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-slate-400 text-xs tracking-widest mb-4">PATH DISTRIBUTION</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={pathStats} 
                      innerRadius={60} 
                      outerRadius={80} 
                      paddingAngle={5} 
                      dataKey="value"
                      stroke="none"
                    >
                      {pathStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                      itemStyle={{ color: '#94a3b8' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 text-[10px] text-slate-400 mt-2 uppercase">
                {pathStats.map((entry, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Usage Frequency */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-slate-400 text-xs tracking-widest mb-4">USAGE FREQUENCY</h3>
              <div className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={freqStats}>
                     <XAxis dataKey="name" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                     <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                     <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                     />
                     <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40} />
                   </BarChart>
                 </ResponsiveContainer>
              </div>
            </div>

            {/* Card 4: Essay Style */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-slate-400 text-xs tracking-widest mb-4">WRITING HABITS</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={styleStats} outerRadius={80} dataKey="value" stroke="none">
                      {styleStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 mt-2 uppercase">
                {styleStats.map((entry, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </main>

          {/* NEW SECTION: Detailed Data Log */}
          <section className="max-w-6xl mx-auto mt-8 border-t border-slate-800 pt-8 pb-12">
            <h2 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <FileJson size={20} /> DETAILED DATA LOG
            </h2>
            <div className="space-y-4">
              {[...data].reverse().map((record) => (
                <div key={record.id} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
                  <div 
                    onClick={() => toggleExpand(record.id)}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-slate-500 font-mono">{record.id}</span>
                      <span className="text-sm text-white font-mono">
                        {new Date(record.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <span className={`text-xs px-2 py-1 rounded border ${
                        record.path === 'university' 
                          ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' 
                          : 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
                      }`}>
                        {record.path === 'university' ? 'UNIVERSITY' : 'MIDDLE/HIGH'}
                      </span>
                      {expandedIds.has(record.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                  
                  {expandedIds.has(record.id) && (
                    <div className="p-4 bg-black/30 border-t border-slate-800 overflow-x-auto">
                      <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap">
                        {JSON.stringify(record.answers, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AdminView;