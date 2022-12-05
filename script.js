class Productos {
    constructor(imagen, UID, Referencia, Nombre, Categoria, Subcategoria) {
        this.imagen = imagen
        this.UID = UID
        this.Referencia = Referencia
        this.Nombre = Nombre
        this.Categoria = Categoria
        this.Subcategoria = Subcategoria
    }
}

class Interfaz {
    añadirProducto(Producto) {
        const lista = document.getElementById('productos')
        const elemento = document.createElement('div')
        console.log('Producto')
        elemento.innerHTML =
            `<div class="card text-center mb-4">
        <div class="card-body">
            <strong>Imagen</strong>:<br>
            <strong>UID</strong>:${Producto.UID}<br>
            <strong>Referencia</strong>:${Producto.Referencia}<br>
            <strong>Nombre</strong>:${Producto.Nombre}<br>
            <strong>Categoria</strong>:${Producto.Categoria}<br>
            <strong>Subcategoria</strong>:${Producto.Subcategoria}<br>
            <button type="button" class="btn btn-danger" style="width: 30px; height: 30px; margin-left: 10px;" name="eliminar">
                    <svg class="icon icon-bin" style="margin-top: -10;margin-left:-5;">
                        <use xlink:href="#icon-bin">
                            <symbol id="icon-bin" viewBox="0 0 32 32">
                                <path
                                    d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z">
                                </path>
                                <path
                                    d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z">
                                </path>
                            </symbol>
                        </use>
                    </svg>
                </button>
            </div>
        </div>`

        lista.appendChild(elemento)
        this.dejarblanco()
    }

    dejarblanco() {
        document.getElementById('productos-form').reset()
    }

    eliminarProducto(elemento) {
        if (elemento.name === 'eliminar') {
            elemento.parentElement.parentElement.parentElement.remove()
        }
    }
}

document.getElementById('productos-form').addEventListener('submit', e => {
    e.preventDefault()
    const UID = document.getElementById('UID').value
    const Nombre = document.getElementById('nombre').value
    const Referencia = document.getElementById('referencia').value
    const Categoria = document.getElementById('categoria').value
    const Subcategoria = document.getElementById('subcategoria').value

    if(Nombre==='' || UID==='' || Referencia==='' || Categoria==='' || Subcategoria===''){
        alert(`Campos vacios`)
    }else{
        const producto=new Productos(Nombre,UID,Referencia,Categoria,Subcategoria)
        const interfaz=new Interfaz
        interfaz.añadirProducto(producto)
        console.log('Datos correctos')
    }
})

document.getElementById('productos').addEventListener('click',e=>{
    const interfaz=new Interfaz
    console.log(e.target)
    interfaz.eliminarProducto(e.target)
})