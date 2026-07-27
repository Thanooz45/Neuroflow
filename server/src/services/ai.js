const base=()=>process.env.OLLAMA_BASE_URL||'http://localhost:11434';
const timeout=Number(process.env.OLLAMA_TIMEOUT_MS||12000);
export async function embed(text){try{const r=await fetch(`${base()}/api/embeddings`,{method:'POST',headers:{'Content-Type':'application/json'},signal:AbortSignal.timeout(timeout),body:JSON.stringify({model:process.env.OLLAMA_EMBED_MODEL||'nomic-embed-text',prompt:text})});if(!r.ok)throw new Error('Ollama embedding request failed');const d=await r.json();return Array.isArray(d.embedding)?d.embedding:[]}catch{return [];}}
export const cosine=(a,b)=>!a?.length||!b?.length?0:a.reduce((s,x,i)=>s+x*(b[i]||0),0)/(Math.sqrt(a.reduce((s,x)=>s+x*x,0))*Math.sqrt(b.reduce((s,x)=>s+x*x,0))||1);
