import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)
    const [products, setProducts] =useState([])
    const [carts, setCarts] = useState([])

    const api = "http://localhost:5000/products"
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(api);
                setProducts(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); 


    const fetchCarts = async (email) => {
        if (!email) return; 
        try {
            const response = await axios.get(`http://localhost:5000/cart?email=${email}`);
            setCarts(response.data);
        } catch (err) {
            console.error("Failed to fetch carts:", err);
        }
    };

    

    const createUser = (email, password, name, photo)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then(res=>{
            console.log(res)
            updateProfile(auth.currentUser, {
                displayName : name, photoURL: photo
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        setLoading(true)
            return signOut(auth)
        }    
        useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            if(currentUser?.email){
                fetchCarts(currentUser.email)
            }
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        products,
        carts,
        user,
        loading,
        createUser,
        logIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;