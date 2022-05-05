
import TopoDoSite from "./componentes/Topo";
import Stories from "./componentes/Stories";
import Posts from "./componentes/Post";
import Sugestions from "./componentes/Sugestao";





function Orgazing() {
    return (
        <>
            <TopoDoSite />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />

                    <div class="posts">
                        <Posts />
                    </div>
                </div>

                <div class="sidebar">
                    <Sugestions />
                </div>
            </div>

            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>

        </>

    )
}

export default function App(){
    return (
        <>
       <Orgazing/>
        </>
    )
}