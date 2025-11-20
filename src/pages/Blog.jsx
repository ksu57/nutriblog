import React, { useEffect, useState } from 'react'
const API = 'http://localhost:4000/articles'
export default function Blog(){
  const [articles,setArticles]=useState([])
  const [query,setQuery]=useState('')
  const [admin,setAdmin]=useState(false)
  const [form,setForm]=useState({title:'',category:'',tags:'',content:'',image:''})
  useEffect(()=>{ fetch(API).then(r=>r.json()).then(d=>setArticles(d)) },[])
  async function add(e){
    e.preventDefault()
    const item = {...form, tags: form.tags.split(',').map(t=>t.trim()), createdAt: new Date().toISOString()}
    await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(item)})
    const res = await fetch(API); setArticles(await res.json()); setForm({title:'',category:'',tags:'',content:'',image:''})
  }
  async function importJSON(e){
    const file=e.target.files[0]; if(!file) return;
    const text = await file.text(); const data=JSON.parse(text);
    for(const it of data){ await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(it)}) }
    const res = await fetch(API); setArticles(await res.json()); alert('Импорт завершён')
  }
  function exportJSON(){
    const blob=new Blob([JSON.stringify(articles,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='articles.json'; a.click(); URL.revokeObjectURL(url)
  }
  const filtered = articles.filter(a=> a.title.toLowerCase().includes(query.toLowerCase()) || a.content.toLowerCase().includes(query.toLowerCase()))
  return (
    <main className="pt-28 container">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Блог</h2>
      <div className="flex gap-4 mb-4">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Поиск..." className="p-2 border rounded w-2/3" />
        <button onClick={()=>setAdmin(!admin)} className="bg-green-600 text-white px-4 py-2 rounded">{admin?'Закрыть':'Админ-панель'}</button>
      </div>
      {admin && (
        <form onSubmit={add} className="bg-green-50 p-4 rounded mb-4">
          <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="Заголовок" className="w-full p-2 border rounded mb-2" required />
          <input value={form.category} onChange={e=>setForm({...form,category:e.target.value})} placeholder="Категория" className="w-full p-2 border rounded mb-2" required />
          <input value={form.tags} onChange={e=>setForm({...form,tags:e.target.value})} placeholder="Теги (через запятую)" className="w-full p-2 border rounded mb-2" />
          <input value={form.image} onChange={e=>setForm({...form,image:e.target.value})} placeholder="URL изображения (опционально)" className="w-full p-2 border rounded mb-2" />
          <textarea value={form.content} onChange={e=>setForm({...form,content:e.target.value})} placeholder="Текст" className="w-full p-2 border rounded mb-2" required />
          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">Добавить</button>
            <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Импорт<input type="file" accept=".json" onChange={importJSON} className="hidden" /></label>
            <button type="button" onClick={exportJSON} className="bg-yellow-500 text-white px-4 py-2 rounded">Экспорт</button>
          </div>
        </form>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(a=>(
          <article key={a.id} className="bg-white p-4 rounded-xl shadow">
            {a.image && <img src={a.image} alt={a.title} className="rounded mb-3" />}
            <h3 className="text-xl font-semibold text-green-700">{a.title}</h3>
            <p className="text-gray-600 mb-2">{a.category}</p>
            <p>{a.content}</p>
          </article>
        ))}
      </div>
    </main>
  )
}