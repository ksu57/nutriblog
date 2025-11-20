import React from 'react'
export default function Contacts(){
  return (
    <main className="pt-28 container text-center">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Контакты</h2>
      <p className="text-lg">Email: <a href="mailto:ksu730000@gmail.com" className="text-green-600 hover:underline">ksu730000@gmail.com</a></p>
      <div className="mt-4 flex justify-center gap-4">
        <a className="bg-blue-100 px-4 py-2 rounded" href="https://vk.com/club169403643" target="_blank" rel="noreferrer">VK</a>
        <a className="bg-blue-100 px-4 py-2 rounded" href="https://t.me/+cpH_NLbRLo2ZGly" target="_blank" rel="noreferrer">Telegram</a>
      </div>
    </main>
  )
}