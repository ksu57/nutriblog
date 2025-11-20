import React from 'react'
export default function About(){
  return (
    <main className="pt-28">
      <section className="mb-4 bg-cover bg-top h-72 flex items-center justify-left+5 text-white" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/src/assets/verh.jpg')"}}>
        <h1 className="text-4xl font-bold ">Сертифицированный нутрициолог</h1>
      </section>
      <div className="container py-8">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Обо мне</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">Здравствуйте! Меня зовут Ксения Виноградова, я - сертифицированный нутрициолог с опытом работы более 5 лет. Моя миссия — помогать людям достигать гармонии между питанием, телом и образом жизни. Я верю, что правильное питание — это не диета, а осознанный путь к здоровью, энергии и внутреннему балансу.</p>
        <p className="mb-4 text-gray-700 leading-relaxed">В своей работе я использую индивидуальный подход, основанный на анализе привычек, биохимических особенностей и образа жизни. Помогаю выстраивать устойчивую систему питания, которая подходит именно вам.</p>
        <p className="mb-6 text-gray-700 leading-relaxed">Добро пожаловать в мой блог, где я делюсь полезными статьями, советами и идеями для здорового образа жизни.</p>
        <a href="/blog" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg">Перейти к статьям</a>
      </div>
    </main>
  )
}