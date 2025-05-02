import React from 'react'

function NavbarComponent() {
       return (
              <div>
                     <div className="grid md:grid-cols-3 gap-6 min-h-[164px] py-8 p-16 bg-gradient-to-r from-blue-700 to-blue-400 overflow-hidden">
                            <div className="md:col-span-2">
                                   <h1 className="text-5xl font-bold text-white">Gestion de Stock</h1>
                                   <p className="text-2xl text-gray-200 mt-4">Gerer vos produits en quelques clic</p>
                            </div>

                            <div className="relative max-md:hidden">
                                   <img src="https://readymadeui.com/readymadeui_banner2.webp" alt="Banner Image"
                                          className="w-full right-4 top-[-13px] md:absolute skew-x-[-16deg] rotate-2 object-cover" />
                            </div>
                     </div>
              </div>
       )
}

export default NavbarComponent
