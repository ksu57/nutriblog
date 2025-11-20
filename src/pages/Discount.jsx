import React from 'react'
export default function Discount(){
  return (
    <main className="pt-28 container">
     <section className="bg-cover bg-center h-32 flex items-center justify-center text-white" style={{}}>
     </section> 
     <div className="grid md:grid-cols-2 gap-1 items-center">
        <div className="flex justify-center">
          <img src="/src/assets/discont.jpg" alt="promo" className="w-64 h-64 object-cover rounded-full shadow-lg" />
        </div>
        <div>
      
        
          <p className="text-xl text-green-700 mb-5">Как пользоваться продуктами NSP со скидкой</p>
          <div className="grid gap-4 mb-7">
            <div className="p-4 bg-white rounded-xl shadow">✅ Натуральные продукты для здоровья</div>
            <div className="p-4 bg-white rounded-xl shadow">🌿 Сертифицированное качество</div>
            <div className="p-4 bg-white rounded-xl shadow">💸 Персональная скидка 20–30%</div>
          </div>
          <a href="https://nsp25.com/signup?sid=7585909" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg">Получить дисконт</a>
        </div>
      </div>
    </main>
  )
}