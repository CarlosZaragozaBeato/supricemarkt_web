import { createContext } from "react";
import {Supermercado} from '../model/Supermercado'
import {Producto} from '../model/Producto'
import { ROUTES } from "../util/Routes";
import Carrefour from '../static/images/carrefour.png'


export interface tipos {
    route: string,
    setRoute:(c: string) => void,
    items:boolean,
    setItems:(c: boolean) => void,
    diaProducts:supermercadoType,
    setDiaProducts:(c: supermercadoType) => void,
    carrefourProducts: supermercadoType,
    setCarrefourProducts:(c: supermercadoType) => void,
    ahorraMasProducts: supermercadoType,
    setAhorraMasProducts:(c: supermercadoType) => void,
    ultimoProducto:Producto|null,
    setUltimoProducto:(c:Producto)=> void,
    listaProducts:Producto[], 
    setListaProducts:(c:Producto[])=> void,
    totalPrecio:number, 
    setTotalPrecio:(c:number)=> void,
    currentIndex: number,
    setCurrentIndex:(c:number) => void,
    currentId: number,
    setCurrentId:(c:number) => void
}

export let DiaPrd:supermercadoType = {
    listaProductos:[],
    supermercado: {
        nombre: "Día",
        web: "https://www.dia.es/compra-online/",
        image: 'https://www.dia.es/compra-online/_ui/desktop/theme-dia/images/dia/svg/logo-dia-bg-red.svg',
      }
}

export let CarrefourPrd:supermercadoType = {
    listaProductos:[],
    supermercado:  {
        nombre: "Carrefour",
        web: "https://www.carrefour.es/?gclid=CjwKCAjwzuqgBhAcEiwAdj5dRrWaKe6kjy0ngHn23L15Mo9DSnoBxabHSbjgvOwoSA_Bs2TXC-t76xoCMckQAvD_BwE&gclsrc=aw.ds",
        image: 'https://www.carrefour.es/dist/rendering/home-front/imagotipo_color_cms.svg?e1f00957ccb57e68f67e134c5a97fccc',
      },
}

export let AhorraMasPrd:supermercadoType = {
    listaProductos:[],
    supermercado:  {
        nombre: "Ahorra Mas",
        web: "https://www.ahorramas.com/",
        image: 'https://www.ahorramas.com/on/demandware.static/Sites-Ahorramas-Site/-/default/dwb9ae299d/images/logo.svg',
      },
}

let initialState:tipos = {
    route: '',
    setRoute: ()=>{},
    items: false,
    setItems: ()=>{},
    diaProducts:DiaPrd,
    setDiaProducts: ()=>{},
    carrefourProducts:CarrefourPrd,
    setCarrefourProducts: ()=>{},
    ahorraMasProducts:AhorraMasPrd,
    setAhorraMasProducts: ()=>{},
    ultimoProducto:null,
    setUltimoProducto:()=>{},
    listaProducts:[],
    setListaProducts:()=>{},
    totalPrecio:0,
    setTotalPrecio:()=>{},
    currentIndex:0,
    setCurrentIndex:()=>{},
    currentId:0,
    setCurrentId:()=>{},
}



export interface supermercadoType {
    supermercado:Supermercado,
    listaProductos: Producto[],
  }




export const ProductsContext = createContext<typeof initialState>(initialState);
