import React from 'react'

function RegisterView() {
       return (
              <div>
                     <div>
                            <div class="text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[180px] sm:p-6 p-4">
                                   <h4 class="sm:text-3xl text-2xl text-white font-medium mt-3">Authentification</h4>
                            </div>

                            <div class="mx-4 mb-4 -mt-20">
                                   <form class="max-w-4xl mx-auto bg-white shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] sm:p-8 p-4 rounded-md">


                                          <div
                                                 class="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                                 <p
                                                        class="mx-4 text-center text-slate-500">
                                                        Inscription
                                                 </p>
                                          </div>

                                          <div class="grid sm:grid-cols-2 gap-8">
                                                 <div>
                                                        <label class="text-slate-800 text-sm font-medium mb-2 block">Prenom</label>
                                                        <input name="name" type="text" class="bg-slate-100 focus:bg-transparent w-full text-sm text-slate-800 px-4 py-2.5 rounded border focus:border-blue-600 outline-none transition-all" placeholder="Enter name" />
                                                 </div>
                                                 <div>
                                                        <label class="text-slate-800 text-sm font-medium mb-2 block">Nom</label>
                                                        <input name="lname" type="text" class="bg-slate-100 focus:bg-transparent w-full text-sm text-slate-800 px-4 py-2.5 rounded border focus:border-blue-600 outline-none transition-all" placeholder="Enter last name" />
                                                 </div>
                                                 <div>
                                                        <label class="text-slate-800 text-sm font-medium mb-2 block">Email </label>
                                                        <input name="email" type="text" class="bg-slate-100 focus:bg-transparent w-full text-sm text-slate-800 px-4 py-2.5 rounded border focus:border-blue-600 outline-none transition-all" placeholder="Enter email" />
                                                 </div>
                                                 <div>
                                                        <label class="text-slate-800 text-sm font-medium mb-2 block">Mot de passe</label>
                                                        <input name="number" type="number" class="bg-slate-100 focus:bg-transparent w-full text-sm text-slate-800 px-4 py-2.5 rounded border focus:border-blue-600 outline-none transition-all" placeholder="Enter mobile number" />
                                                 </div>


                                          </div>
                                          <div class="mt-8">
                                                 <button type="button" class="py-2.5 px-5 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                                        Sign up
                                                 </button>
                                          </div>
                                   </form>
                            </div>
                     </div>
              </div>
       )
}

export default RegisterView
