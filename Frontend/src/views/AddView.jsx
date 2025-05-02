import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import axios from 'axios'

function AddView() {
       const [Image, setImage] = useState("")
       const [Nom, setNom] = useState("")
       const [Description, setDescription] = useState("")
       const [Prix, setPrix] = useState("")
       const [Categorie, setCategorie] = useState("")
       const [Quantite, setQuantite] = useState("")

       const resetForm = () => {
              setImage("")
              setNom("")
              setDescription("")
              setPrix("")
              setCategorie("")
              setQuantite("")
       }

       const Submit = (e) => {
              e.preventDefault()
              const newProduct = {
                     image: Image,
                     nom: Nom,
                     description: Description,
                     prix: parseFloat(Prix),
                     categorie: Categorie,
                     quantite: parseInt(Quantite, 10)
              }

              axios.post('http://localhost:5000/api/ajouterProduit', newProduct)
                     .then((res) => {
                            console.log(res.data)
                            alert("Produit ajouté avec succès")
                            resetForm()
                     })
                     .catch((err) => {
                            console.error("Erreur backend :", err.response?.data || err.message)
                            alert("Erreur lors de l'ajout du produit")
                     })
       }

       return (
              <>
                     <NavbarComponent />
                     <div className="flex flex-col justify-center items-center h-screen -mt-28">
                            <form onSubmit={Submit} className="space-y-6 px-4 w-2/4 mx-auto p-10">
                                   <h2 className="text-2xl font-bold">Ajouter un produit</h2>

                                   <div className="flex items-center">
                                          <label className="text-slate-400 font-medium w-36 text-sm">Image</label>
                                          <input
                                                 type="text"
                                                 placeholder="URL de l'image"
                                                 value={Image}
                                                 onChange={(e) => setImage(e.target.value)}
                                                 className="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white"
                                          />
                                   </div>

                                   <div className="flex items-center">
                                          <label className="text-slate-400 font-medium w-36 text-sm">Nom</label>
                                          <input
                                                 type="text"
                                                 placeholder="Nom du produit"
                                                 value={Nom}
                                                 onChange={(e) => setNom(e.target.value)}
                                                 className="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white"
                                          />
                                   </div>

                                   <div className="flex items-center">
                                          <label className="text-slate-400 font-medium w-36 text-sm">Description</label>
                                          <input
                                                 type="text"
                                                 placeholder="Description"
                                                 value={Description}
                                                 onChange={(e) => setDescription(e.target.value)}
                                                 className="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white"
                                          />
                                   </div>

                                   <div className="flex items-center">
                                          <label className="text-slate-400 font-medium w-36 text-sm">Prix</label>
                                          <input
                                                 type="number"
                                                 placeholder="Prix"
                                                 value={Prix}
                                                 onChange={(e) => setPrix(e.target.value)}
                                                 className="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white"
                                          />
                                   </div>

                                   <div className="flex items-center">
                                          <label className="text-slate-400 font-medium w-36 text-sm">Categorie</label>
                                          <input
                                                 type="text"
                                                 placeholder="Catégorie"
                                                 value={Categorie}
                                                 onChange={(e) => setCategorie(e.target.value)}
                                                 className="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white"
                                          />
                                   </div>

                                   <div className="flex items-center">
                                          <label className="text-slate-400 font-medium w-36 text-sm">Quantité</label>
                                          <input
                                                 type="number"
                                                 placeholder="Quantité"
                                                 value={Quantite}
                                                 onChange={(e) => setQuantite(e.target.value)}
                                                 className="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white"
                                          />
                                   </div>

                                   <button
                                          type="submit"
                                          className="mt-10 px-6 py-2 w-1/3 bg-black rounded-lg hover:bg-green-500 text-sm font-medium text-white mx-auto block"
                                   >
                                          Ajouter
                                   </button>
                            </form>
                     </div>
              </>
       )
}

export default AddView
