//import React from 'react'
//import { NavLink } from 'react-router-dom'

//export default function Header(){
  //return (
    //<header className="fixed top-0 left-0 right-0 z-50 bg-amber-50 border-b border-amber-200 shadow-sm">
      //<div className="container flex items-center justify-between py-4">
       // <div className="flex items-center gap-3">
         // <img src="/src/assets/logo.png" alt="logo" className="h-20 w-auto" />
          //<div>
            //<div className="text-2xl font-semibold text-green-700">Заметки нутрициолога</div>
          //</div>
        //</div>

//        <nav className="flex items-center gap-6">
//        <NavLink to="/" className={({isActive})=>isActive? 'text-green-700 font-semibold':'hover:text-green-600'}>Обо мне</NavLink>
//          <NavLink to="/blog" className={({isActive})=>isActive? 'text-green-700 font-semibold':'hover:text-green-600'}>Блог</NavLink>
//          <NavLink to="/discount" className={({isActive})=>isActive? 'text-green-700 font-semibold':'hover:text-green-600'}>Дисконт NSP</NavLink>
//          <NavLink to="/contacts" className={({isActive})=>isActive? 'text-green-700 font-semibold':'hover:text-green-600'}>Контакты</NavLink>
//          <div className="flex items-center gap-3 ml-4">
//            <a href="https://vk.com/club169403643" target="_blank" rel="noreferrer" className="hover:opacity-80"><img src="/src/assets/vk.svg" alt="vk" className="w-6 h-6"/></a>
//            <a href="https://t.me/+cpH_NLbRLo2ZGly" target="_blank" rel="noreferrer" className="hover:opacity-80"><img src="/src/assets/telegram.svg" alt="tg" className="w-6 h-6"/></a>
//          </div>
//        </nav>
//      </div>
//    </header>
//  )
//}


import React from 'react'
import { NavLink } from 'react-router-dom'

// 🔥 Импорты картинок (теперь Vite сам создаст правильные пути)
import logo from '../assets/logo.png'
import vkIcon from '../assets/vk.svg'
import tgIcon from '../assets/telegram.svg'

export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-50 border-b border-amber-200 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        
        {/* ЛОГОТИП + НАЗВАНИЕ */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-20 w-auto" />
          <div>
            <div className="text-2xl font-semibold text-green-700">
              Заметки нутрициолога
            </div>
          </div>
        </div>

        {/* МЕНЮ */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({isActive}) =>
              isActive
                ? "text-green-700 font-semibold"
                : "hover:text-green-600"
            }
          >
            Обо мне
          </NavLink>

          <NavLink
            to="/blog"
            className={({isActive}) =>
              isActive
                ? "text-green-700 font-semibold"
                : "hover:text-green-600"
            }
          >
            Блог
          </NavLink>

          <NavLink
            to="/discount"
            className={({isActive}) =>
              isActive
                ? "text-green-700 font-semibold"
                : "hover:text-green-600"
            }
          >
            Дисконт NSP
          </NavLink>

          <NavLink
            to="/contacts"
            className={({isActive}) =>
              isActive
                ? "text-green-700 font-semibold"
                : "hover:text-green-600"
            }
          >
            Контакты
          </NavLink>

          {/* Иконки соцсетей */}
          <div className="flex items-center gap-3 ml-4">
            <a
              href="https://vk.com/club169403643"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <img src={vkIcon} alt="vk" className="w-6 h-6" />
            </a>

            <a
              href="https://t.me/+cpH_NLbRLo2ZGly"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <img src={tgIcon} alt="tg" className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}