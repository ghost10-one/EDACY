import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
function EditView() {

       const { id } = useParams()
       const [nom, setNom] = useState()
       const [description, setDescription] = useState()
       const [prix, setPrix] = useState()
       const [categorie, setCategorie] = useState()
       const [quantite, setQuantite] = useState()
       const [image, setImage] = useState()
       const navigate = useNavigate()

       useEffect(() => {

              axios.get('http://localhost:5000/api/afficherProduitParId/' + id)
                     .then(res => {
                            setNom(res.data.nom)
                            setDescription(res.data.description)
                            setPrix(res.data.prix)
                            setCategorie(res.data.categorie)
                            setQuantite(res.data.quantite)
                            setImage(res.data.image)
                     })
                     .catch(err => console.log(err))
       }, [id])

       const Submit = (e) => {
              e.preventDefault()
              axios.put("http://localhost:5000/api/modifierProduitParId/" + id, {

                     nom,
                     description,
                     prix: parseFloat(prix),
                     categorie,
                     quantite: parseInt(quantite, 10),
                     image


              })
                     .then(res => {
                            console.log(res.data)
                            alert("Produit modifié avec succès")
                            navigate('/')
                     })
                     .catch(err => {
                            console.error("Erreur backend :", err.response?.data || err.message)
                            alert("Erreur lors de la modification du produit")
                     })
       }

       return (
              <>
                     <NavbarComponent />
                     <div class="flex flex-col justify-center items-center h-screen -mt-28 ">
                            <form onSubmit={Submit} class="space-y-6 px-4 w-2/4 mx-auto">
                                   <div class="flex items-center">
                                          <label class="text-slate-400 font-medium w-36 text-sm">Image</label>
                                          <input type="text" placeholder="Enter your name"
                                                 value={image}
                                                 onChange={(e) => setImage(e.target.value)}
                                                 class="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white" />
                                   </div>

                                   <div class="flex items-center">
                                          <label class="text-slate-400 font-medium w-36 text-sm">Nom</label>
                                          <input type="text" placeholder="Enter le nom du produit"
                                                 value={nom}
                                                 onChange={(e) => setNom(e.target.value)}
                                                 class="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white" />
                                   </div>

                                   <div class="flex items-center">
                                          <label class="text-slate-400 font-medium w-36 text-sm">Description</label>
                                          <input type="text" placeholder="Enter la description du produit"
                                                 value={description}
                                                 onChange={(e) => setDescription(e.target.value)}
                                                 class="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white" />
                                   </div>

                                   <div class="flex items-center">
                                          <label class="text-slate-400 font-medium w-36 text-sm">Prix</label>
                                          <input type="number" placeholder="Enter le prix du produit"
                                                 value={prix}
                                                 onChange={(e) => setPrix(e.target.value)}
                                                 class="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white" />
                                   </div>

                                   <div class="flex items-center">
                                          <label class="text-slate-400 font-medium w-36 text-sm">Categorie</label>
                                          <input type="text" placeholder="Enter la categorie du produit"
                                                 value={categorie}
                                                 onChange={(e) => setCategorie(e.target.value)}
                                                 class="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white" />
                                   </div>

                                   <div class="flex items-center">
                                          <label class="text-slate-400 font-medium w-36 text-sm">Quantite</label>
                                          <input type="number" placeholder="Enter la quantite du produit"
                                                 value={quantite}
                                                 onChange={(e) => setQuantite(e.target.value)}
                                                 class="px-2 py-2 w-full border-b-2 focus:border-slate-900 outline-none text-sm bg-white" />
                                   </div>

                                   <div class="flex items-center flex-row mx-2 " >
                                          <button type="submit"
                                                 class="!mt-10 px-6 py-2 w-1/3  rounded-md bg-green-500  hover:bg-black text-center font-semibold text-white mx-auto block">Mettre a jour</button>
                                          <Link to="/" class=" bg-orange-500 w-1/3 !mt-10 px-6 py-2 text-center text-white font-semibold  hover:bg-orange-400" >Retour</Link>
                                   </div>
                            </form>
                     </div>
              </>
       )
}

export default EditView
